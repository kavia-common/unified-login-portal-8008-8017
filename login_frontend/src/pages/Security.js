import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Modal from "../components/Modal";
import "./Security.css";

// PUBLIC_INTERFACE
export default function Security() {
  /** Security settings page with 2FA, password, and sessions UI. */
  const { user } = useAuth();
  const [open2fa, setOpen2fa] = useState(false);
  const [openPwd, setOpenPwd] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  if (!user) {
    return (
      <div className="page__container">
        <div className="card">
          <h2>Please sign in</h2>
          <p>To access security settings, return to the sign-in page.</p>
          <a className="btn btn--primary" href="/">Go to sign in</a>
        </div>
      </div>
    );
  }

  return (
    <div className="page__container">
      <div className="page__header">
        <h1 className="page__title">Security</h1>
        <p className="page__subtitle">Keep your account safe with strong authentication and controls.</p>
      </div>

      <div className="grid">
        <div className="card">
          <div className="section__header">
            <h3 className="section__title">Two-factor authentication (2FA)</h3>
            <span className={`badge ${twoFAEnabled ? "badge--success" : "badge--muted"}`}>
              {twoFAEnabled ? "Enabled" : "Disabled"}
            </span>
          </div>
          <p className="section__desc">
            Add an extra layer of protection to your account by requiring a code at sign-in.
          </p>
          <div className="section__actions">
            {twoFAEnabled ? (
              <button className="btn btn--ghost" onClick={() => setOpen2fa(true)}>Disable 2FA</button>
            ) : (
              <button className="btn btn--primary" onClick={() => setOpen2fa(true)}>Enable 2FA</button>
            )}
          </div>
        </div>

        <div className="card">
          <h3 className="section__title">Password</h3>
          <p className="section__desc">
            Choose a strong password and change it periodically to keep your account secure.
          </p>
          <div className="section__actions">
            <button className="btn btn--primary" onClick={() => setOpenPwd(true)}>Change password</button>
          </div>
        </div>

        <div className="card">
          <h3 className="section__title">Active sessions</h3>
          <p className="section__desc">Review where you're signed in and revoke devices you don't recognize.</p>
          <div className="sessions__list">
            <div className="session__item">
              <div>
                <div className="session__name">This browser</div>
                <div className="session__meta">Chrome • San Francisco, US • Now</div>
              </div>
              <span className="badge badge--success">Active</span>
            </div>
            <div className="session__item">
              <div>
                <div className="session__name">MacOS App</div>
                <div className="session__meta">Mac • New York, US • 3 days ago</div>
              </div>
              <button className="btn btn--ghost">Sign out</button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open2fa}
        onClose={() => setOpen2fa(false)}
        title={`${twoFAEnabled ? "Disable" : "Enable"} 2FA`}
        footer={
          <>
            <button className="btn btn--ghost" onClick={() => setOpen2fa(false)}>Cancel</button>
            <button
              className="btn btn--primary"
              onClick={() => {
                setTwoFAEnabled((v) => !v);
                setOpen2fa(false);
              }}
            >
              {twoFAEnabled ? "Disable" : "Enable"}
            </button>
          </>
        }
      >
        {twoFAEnabled ? (
          <p>
            Disabling 2FA will remove the extra verification step during sign-in. We recommend keeping
            it enabled for improved security.
          </p>
        ) : (
          <div>
            <p>
              Scan the QR code with your authenticator app and enter the code to enable 2FA.
              (Demo placeholder)
            </p>
            <div className="qr__placeholder">QR</div>
            <label className="form__label" htmlFor="code">Verification code</label>
            <input id="code" className="form__input" placeholder="123 456" />
          </div>
        )}
      </Modal>

      <Modal
        open={openPwd}
        onClose={() => setOpenPwd(false)}
        title="Change password"
        footer={
          <>
            <button className="btn btn--ghost" onClick={() => setOpenPwd(false)}>Cancel</button>
            <button className="btn btn--primary" onClick={() => setOpenPwd(false)}>Update</button>
          </>
        }
      >
        <div className="form__grid">
          <label className="form__label" htmlFor="current">Current password</label>
          <input id="current" type="password" className="form__input" placeholder="••••••••" />
          <label className="form__label" htmlFor="new">New password</label>
          <input id="new" type="password" className="form__input" placeholder="••••••••" />
          <label className="form__label" htmlFor="confirm">Confirm new password</label>
          <input id="confirm" type="password" className="form__input" placeholder="••••••••" />
        </div>
      </Modal>
    </div>
  );
}
