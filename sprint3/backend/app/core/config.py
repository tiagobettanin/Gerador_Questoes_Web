from __future__ import annotations

import os
from functools import lru_cache

from dotenv import load_dotenv
from pydantic import BaseModel, Field

load_dotenv()


class Settings(BaseModel):
    app_name: str = "AI Educacional API"
    app_version: str = "0.1.0"
    debug: bool = Field(default=False)
    database_url: str = Field(default="sqlite:///./database.db")
    secret_key: str = Field(default="change-me-in-production")
    algorithm: str = Field(default="HS256")
    access_token_expire_minutes: int = Field(default=60)
    frontend_url: str = Field(default="http://localhost:5173")

    @property
    def cors_origins(self) -> list[str]:
        origins = {
            self.frontend_url.rstrip("/"),
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:4173",
            "http://127.0.0.1:4173",
        }
        extra = os.getenv("CORS_ORIGINS", "")
        if extra:
            origins.update(origin.strip() for origin in extra.split(",") if origin.strip())
        return sorted(origins)


@lru_cache
def get_settings() -> Settings:
    return Settings(
        debug=os.getenv("DEBUG", "false").lower() == "true",
        database_url=os.getenv("DATABASE_URL", "sqlite:///./database.db"),
        secret_key=os.getenv("SECRET_KEY", "change-me-in-production"),
        algorithm=os.getenv("ALGORITHM", "HS256"),
        access_token_expire_minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60")),
        frontend_url=os.getenv("FRONTEND_URL", "http://localhost:5173"),
    )
