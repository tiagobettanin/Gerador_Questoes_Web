from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.db.init_db import create_db_and_tables
from app.routers import ai, auth, exercise_lists

settings = get_settings()


@asynccontextmanager
async def lifespan(_: FastAPI):
    create_db_and_tables()
    yield


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    debug=settings.debug,
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["health"])
def read_root() -> dict[str, str]:
    return {"message": "AI Educacional API online"}


@app.get("/health", tags=["health"])
def read_health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(auth.router)
app.include_router(exercise_lists.router)
app.include_router(ai.router)
