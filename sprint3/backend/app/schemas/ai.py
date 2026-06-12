from __future__ import annotations

from pydantic import BaseModel, Field

from app.schemas.question import QuestionRead


class GenerateExerciseListRequest(BaseModel):
    subject: str = Field(min_length=2, max_length=120)
    school_year: str = Field(min_length=2, max_length=50)
    topic: str = Field(min_length=2, max_length=120)
    difficulty: str = Field(min_length=2, max_length=50)
    question_type: str = Field(min_length=2, max_length=50)
    quantity: int = Field(ge=1, le=10)
    observations: str | None = Field(default=None, max_length=1000)


class GenerateExerciseListResponse(BaseModel):
    title: str
    description: str | None = None
    subject: str
    school_year: str
    topic: str
    difficulty: str
    question_type: str
    quantity: int
    questions: list[QuestionRead]
    provider: str = "mock"
    warning: str | None = None
