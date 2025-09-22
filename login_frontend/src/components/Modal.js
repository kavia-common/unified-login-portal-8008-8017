import React, { useEffect } from "react";
import "./Modal.css";

// PUBLIC_INTERFACE
export default function Modal({ open, onClose, title, children, footer }) {
  /** Accessible modal dialog with overlay and smooth transitions. */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal__backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal__card">
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <button className="modal__close" onClick={onClose} aria-label="Close dialog">✕</button>
        </div>
        <div className="modal__body">{children}</div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
