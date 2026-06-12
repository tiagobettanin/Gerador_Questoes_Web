from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlmodel import Session, select

from app.db.session import get_session
from app.models.exercise_list import ExerciseList
from app.models.question import Question
from app.models.user import User
from app.routers.dependencies import get_current_user
from app.schemas.exercise_list import ExerciseListCreate, ExerciseListListItem, ExerciseListRead, ExerciseListUpdate

router = APIRouter(prefix="/exercise-lists", tags=["exercise-lists"])


def _serialize_list(session: Session, exercise_list: ExerciseList) -> ExerciseListRead:
    questions = session.exec(
        select(Question)
        .where(Question.exercise_list_id == exercise_list.id)
        .order_by(Question.order)
    ).all()

    return ExerciseListRead(
        id=exercise_list.id,
        title=exercise_list.title,
        description=exercise_list.description,
        subject=exercise_list.subject,
        school_year=exercise_list.school_year,
        topic=exercise_list.topic,
        difficulty=exercise_list.difficulty,
        question_type=exercise_list.question_type,
        quantity=exercise_list.quantity,
        owner_id=exercise_list.owner_id,
        created_at=exercise_list.created_at,
        updated_at=exercise_list.updated_at,
        questions=questions,
    )


def _get_owned_list_or_404(session: Session, list_id: int, user_id: int) -> ExerciseList:
    exercise_list = session.get(ExerciseList, list_id)
    if not exercise_list or exercise_list.owner_id != user_id:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Lista nao encontrada.")
    return exercise_list


@router.post("", response_model=ExerciseListRead, status_code=status.HTTP_201_CREATED)
def create_exercise_list(
    payload: ExerciseListCreate,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> ExerciseListRead:
    quantity = payload.quantity if payload.quantity is not None else len(payload.questions)
    exercise_list = ExerciseList(
        title=payload.title.strip(),
        description=payload.description,
        subject=payload.subject,
        school_year=payload.school_year,
        topic=payload.topic,
        difficulty=payload.difficulty,
        question_type=payload.question_type,
        quantity=quantity,
        owner_id=current_user.id,
    )
    session.add(exercise_list)
    session.commit()
    session.refresh(exercise_list)

    for index, question_payload in enumerate(payload.questions, start=1):
        session.add(
            Question(
                statement=question_payload.statement,
                answer=question_payload.answer,
                difficulty=question_payload.difficulty,
                alternatives=question_payload.alternatives,
                correct_answer=question_payload.correct_answer,
                explanation=question_payload.explanation,
                order=question_payload.order or index,
                exercise_list_id=exercise_list.id,
            )
        )

    session.commit()
    return _serialize_list(session, exercise_list)


@router.get("", response_model=list[ExerciseListListItem])
def list_exercise_lists(
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> list[ExerciseList]:
    statement = (
        select(ExerciseList)
        .where(ExerciseList.owner_id == current_user.id)
        .order_by(ExerciseList.created_at.desc())
    )
    return session.exec(statement).all()


@router.get("/{list_id}", response_model=ExerciseListRead)
def get_exercise_list(
    list_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> ExerciseListRead:
    exercise_list = _get_owned_list_or_404(session, list_id, current_user.id)
    return _serialize_list(session, exercise_list)


@router.put("/{list_id}", response_model=ExerciseListRead)
def update_exercise_list(
    list_id: int,
    payload: ExerciseListUpdate,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> ExerciseListRead:
    exercise_list = _get_owned_list_or_404(session, list_id, current_user.id)

    exercise_list.title = payload.title.strip()
    exercise_list.description = payload.description
    exercise_list.subject = payload.subject
    exercise_list.school_year = payload.school_year
    exercise_list.topic = payload.topic
    exercise_list.difficulty = payload.difficulty
    exercise_list.question_type = payload.question_type
    exercise_list.quantity = payload.quantity if payload.quantity is not None else len(payload.questions)
    exercise_list.updated_at = datetime.now(timezone.utc)
    session.add(exercise_list)
    session.commit()

    existing_questions = session.exec(
        select(Question).where(Question.exercise_list_id == exercise_list.id)
    ).all()
    for question in existing_questions:
        session.delete(question)
    session.commit()

    for index, question_payload in enumerate(payload.questions, start=1):
        session.add(
            Question(
                statement=question_payload.statement,
                answer=question_payload.answer,
                difficulty=question_payload.difficulty,
                alternatives=question_payload.alternatives,
                correct_answer=question_payload.correct_answer,
                explanation=question_payload.explanation,
                order=question_payload.order or index,
                exercise_list_id=exercise_list.id,
            )
        )

    session.commit()
    session.refresh(exercise_list)
    return _serialize_list(session, exercise_list)


@router.delete("/{list_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_exercise_list(
    list_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> Response:
    exercise_list = _get_owned_list_or_404(session, list_id, current_user.id)
    questions = session.exec(select(Question).where(Question.exercise_list_id == exercise_list.id)).all()
    for question in questions:
        session.delete(question)
    session.delete(exercise_list)
    session.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
