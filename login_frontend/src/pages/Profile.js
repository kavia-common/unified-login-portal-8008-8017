import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Modal from "../components/Modal";
import "./Profile.css";

// PUBLIC_INTERFACE
export default function Profile() {
  /** Profile page to view and edit basic user information. */
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || ""
  });

  if (!user) {
    return (
      <div className="page__container">
        <div className="card">
          <h2>Please sign in</h2>
          <p>To access your profile, return to the sign-in page.</p>
          <a className="btn btn--primary" href="/">Go to sign in</a>
        </div>
      </div>
    );
  }

  return (
    <div className="page__container">
      <div className="page__header">
        <h1 className="page__title">Profile</h1>
        <p className="page__subtitle">Manage your personal information and account details.</p>
      </div>

      <div className="grid">
        <div className="card">
          <div className="profile__row">
            <img src={user.avatarUrl} alt="avatar" className="profile__avatar" />
            <div>
              <div className="profile__name">{user.name}</div>
              <div className="profile__email">{user.email}</div>
              <div className="profile__provider">Signed in with {user.provider}</div>
            </div>
          </div>
          <div className="profile__actions">
            <button className="btn btn--primary" onClick={() => setOpen(true)}>
              Edit details
            </button>
          </div>
        </div>

        <div className="card">
          <h3 className="section__title">Preferences</h3>
          <div className="pref__row">
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider" />
            </label>
            <div>
              <div className="pref__name">Email Notifications</div>
              <div className="pref__desc">Receive updates and security alerts via email.</div>
            </div>
          </div>
          <div className="pref__row">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider" />
            </label>
            <div>
              <div className="pref__name">Dark Mode</div>
              <div className="pref__desc">Reduce eye strain with a darker color scheme.</div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Edit profile"
        footer={
          <>
            <button className="btn btn--ghost" onClick={() => setOpen(false)}>Cancel</button>
            <button className="btn btn--primary" onClick={() => setOpen(false)}>Save</button>
          </>
        }
      >
        <div className="form__grid">
          <label className="form__label" htmlFor="name">Name</label>
          <input
            id="name"
            className="form__input"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <label className="form__label" htmlFor="email">Email</label>
          <input
            id="email"
            className="form__input"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
      </Modal>
    </div>
  );
}
