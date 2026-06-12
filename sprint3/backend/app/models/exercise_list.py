from __future__ import annotations

from datetime import datetime, timezone

from sqlmodel import Field, SQLModel


class ExerciseList(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=255)
    description: str | None = Field(default=None, max_length=2000)
    subject: str | None = Field(default=None, max_length=120)
    school_year: str | None = Field(default=None, max_length=50)
    topic: str | None = Field(default=None, max_length=120)
    difficulty: str | None = Field(default=None, max_length=50)
    question_type: str | None = Field(default=None, max_length=50)
    quantity: int | None = Field(default=None)
    owner_id: int = Field(foreign_key="user.id", index=True)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc), nullable=False)
