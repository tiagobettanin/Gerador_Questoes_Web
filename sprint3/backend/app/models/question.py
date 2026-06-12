from __future__ import annotations

from typing import Any

from sqlalchemy import JSON, Column
from sqlmodel import Field, SQLModel


class Question(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    statement: str = Field(max_length=4000)
    answer: str | None = Field(default=None, max_length=4000)
    difficulty: str | None = Field(default=None, max_length=50)
    alternatives: list[str] | None = Field(default=None, sa_column=Column(JSON, nullable=True))
    correct_answer: str | None = Field(default=None, max_length=2000)
    explanation: str | None = Field(default=None, max_length=4000)
    order: int = Field(default=1)
    exercise_list_id: int = Field(foreign_key="exerciselist.id", index=True)
