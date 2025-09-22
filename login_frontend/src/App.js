import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import "./index.css";
import "./App.css";

function RequireAuth({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" replace />;
}

// PUBLIC_INTERFACE
function App() {
  /** App entrypoint: provides auth context and routes with top navigation. */
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/security"
            element={
              <RequireAuth>
                <Security />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
