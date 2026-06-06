import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import GenerateList from "../pages/GenerateList";
import PreviewList from "../pages/PreviewList";
import MyLists from "../pages/MyLists";
import ListDetails from "../pages/ListDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/generate" element={<GenerateList />} />
        <Route path="/preview" element={<PreviewList />} />
        <Route path="/my-lists" element={<MyLists />} />
        <Route path="/list/:id" element={<ListDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
