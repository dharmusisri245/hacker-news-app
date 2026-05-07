import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bookmarks from "../pages/Bookmarks";
import NotFound from "../pages/NotFound";
import StoryDetails from "../pages/StoryDetails";
import ProtectedRoute from "../component/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/stories/:id"
        element={<StoryDetails />}
      />

      <Route
        path="/bookmarks"
        element={
          <ProtectedRoute>
            <Bookmarks />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;