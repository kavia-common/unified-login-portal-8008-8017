import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

// PUBLIC_INTERFACE
export default function Login() {
  /** Central card-based OAuth login screen with Ocean Professional theme. */
  const { loginWithProvider, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    loginWithProvider(provider);
    navigate("/profile");
  };

  if (user) {
    // If already logged in, redirect UI element.
    return (
      <div className="login__container">
        <div className="login__card">
          <h1 className="login__title">You are already signed in</h1>
          <p className="login__subtitle">Proceed to your profile to manage account and security.</p>
          <button className="btn btn--primary btn--full" onClick={() => navigate("/profile")}>
            Go to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login__container">
      <div className="login__gradient" aria-hidden />
      <div className="login__card">
        <div className="login__brand">
          <div className="login__logo">🌊</div>
          <div className="login__brandText">
            <h1 className="login__title">Welcome to Ocean Portal</h1>
            <p className="login__subtitle">Sign in to continue</p>
          </div>
        </div>

        <div className="oauth__stack">
          <button
            className="oauth__btn oauth__btn--google"
            onClick={() => handleLogin("google")}
            aria-label="Sign in with Google"
          >
            <span className="oauth__icon">🟢</span> Continue with Google
          </button>

          <button
            className="oauth__btn oauth__btn--github"
            onClick={() => handleLogin("github")}
            aria-label="Sign in with GitHub"
          >
            <span className="oauth__icon">🐱</span> Continue with GitHub
          </button>

          <button
            className="oauth__btn oauth__btn--facebook"
            onClick={() => handleLogin("facebook")}
            aria-label="Sign in with Facebook"
          >
            <span className="oauth__icon">📘</span> Continue with Facebook
          </button>
        </div>

        <div className="login__divider">
          <span>or</span>
        </div>

        <form className="login__form" onSubmit={(e) => e.preventDefault()}>
          <label className="form__label" htmlFor="email">Email</label>
          <input className="form__input" id="email" type="email" placeholder="you@example.com" />
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" id="password" type="password" placeholder="••••••••" />
          <button className="btn btn--primary btn--full" type="submit" onClick={() => handleLogin("password")}>
            Sign in
          </button>
        </form>

        <p className="login__hint">
          By continuing you agree to our Terms and acknowledge our Privacy Policy.
        </p>
      </div>
    </div>
  );
}
