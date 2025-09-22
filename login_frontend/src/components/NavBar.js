import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./NavBar.css";

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Top navigation bar for Profile and Security pages. */
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav__left">
        <Link to="/" className="nav__brand" aria-label="Ocean Portal Home">
          <span className="nav__brandLogo">🌊</span>
          <span className="nav__brandText">Ocean Portal</span>
        </Link>
      </div>
      <div className="nav__center">
        {user && (
          <>
            <Link
              to="/profile"
              className={`nav__link ${location.pathname === "/profile" ? "active" : ""}`}
            >
              Profile
            </Link>
            <Link
              to="/security"
              className={`nav__link ${location.pathname === "/security" ? "active" : ""}`}
            >
              Security
            </Link>
          </>
        )}
      </div>
      <div className="nav__right">
        {user ? (
          <div className="nav__user">
            <img src={user.avatarUrl} alt="avatar" className="nav__avatar" />
            <span className="nav__userName">{user.name}</span>
            <button className="btn btn--ghost" onClick={logout} aria-label="Sign out">
              Sign out
            </button>
          </div>
        ) : (
          <Link to="/" className="btn btn--primary" aria-label="Go to sign in">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}
