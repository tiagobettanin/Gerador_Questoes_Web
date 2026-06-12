const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export function getApiUrl() {
  return API_URL;
}

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("accessToken");
  const headers = new Headers(options.headers || {});

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const payload = isJson ? await response.json() : null;

  if (!response.ok) {
    const message = payload?.detail || "Nao foi possivel concluir a requisicao.";
    const error = new Error(message);
    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
}
