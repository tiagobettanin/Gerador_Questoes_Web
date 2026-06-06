import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/generate" element={<div>Gerar Lista</div>} />
        <Route path="/my-lists" element={<div>Minhas Listas</div>} />
        <Route path="/list/:id" element={<div>Detalhes da Lista</div>} />
      </Routes>
    </BrowserRouter>
  );
}