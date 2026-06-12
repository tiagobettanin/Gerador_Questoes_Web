import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import GenerateList from "../pages/GenerateList";
import ListDetails from "../pages/ListDetails";
import Login from "../pages/Login";
import MyLists from "../pages/MyLists";
import PreviewList from "../pages/PreviewList";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/generate" element={<GenerateList />} />
          <Route path="/preview" element={<PreviewList />} />
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/list/:id" element={<ListDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
