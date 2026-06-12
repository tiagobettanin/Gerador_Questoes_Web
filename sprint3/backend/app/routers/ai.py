from __future__ import annotations

from fastapi import APIRouter, Depends

from app.models.user import User
from app.routers.dependencies import get_current_user
from app.schemas.ai import GenerateExerciseListRequest, GenerateExerciseListResponse
from app.services.ai_service import generate_exercise_list_mock

router = APIRouter(prefix="/ai", tags=["ai"])


@router.post("/generate-exercise-list", response_model=GenerateExerciseListResponse)
def generate_exercise_list(
    payload: GenerateExerciseListRequest,
    current_user: User = Depends(get_current_user),
) -> GenerateExerciseListResponse:
    _ = current_user
    return generate_exercise_list_mock(payload)
