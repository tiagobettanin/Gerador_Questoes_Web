from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field

from app.schemas.question import QuestionCreate, QuestionRead, QuestionUpdate


class ExerciseListBase(BaseModel):
    title: str = Field(min_length=3, max_length=255)
    description: str | None = Field(default=None, max_length=2000)
    subject: str | None = Field(default=None, max_length=120)
    school_year: str | None = Field(default=None, max_length=50)
    topic: str | None = Field(default=None, max_length=120)
    difficulty: str | None = Field(default=None, max_length=50)
    question_type: str | None = Field(default=None, max_length=50)
    quantity: int | None = Field(default=None, ge=1, le=50)


class ExerciseListCreate(ExerciseListBase):
    questions: list[QuestionCreate] = Field(default_factory=list)


class ExerciseListUpdate(ExerciseListBase):
    questions: list[QuestionUpdate] = Field(default_factory=list)


class ExerciseListRead(ExerciseListBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    owner_id: int
    created_at: datetime
    updated_at: datetime
    questions: list[QuestionRead] = Field(default_factory=list)


class ExerciseListListItem(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    description: str | None = None
    subject: str | None = None
    school_year: str | None = None
    topic: str | None = None
    difficulty: str | None = None
    question_type: str | None = None
    quantity: int | None = None
    owner_id: int
    created_at: datetime
    updated_at: datetime
