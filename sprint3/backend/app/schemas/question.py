from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field


class QuestionBase(BaseModel):
    statement: str = Field(min_length=3, max_length=4000)
    answer: str | None = Field(default=None, max_length=4000)
    difficulty: str | None = Field(default=None, max_length=50)
    alternatives: list[str] = Field(default_factory=list)
    correct_answer: str | None = Field(default=None, max_length=2000)
    explanation: str | None = Field(default=None, max_length=4000)
    order: int | None = Field(default=None, ge=1)


class QuestionCreate(QuestionBase):
    pass


class QuestionUpdate(QuestionBase):
    pass


class QuestionRead(QuestionBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    order: int
    exercise_list_id: int
