# Ocean Professional Login Frontend

This React app implements:
- Card-based central login with OAuth buttons (Google, GitHub, Facebook) — UI stubs ready for backend wiring.
- Top navigation with routes for Profile and Security.
- Profile page with editable details (modal) and preferences toggles.
- Security page with 2FA enable/disable (modal), password change (modal), and active sessions list.
- Ocean Professional theme: blue primary (#2563EB), amber secondary (#F59E0B), clean minimalist design, subtle gradients, rounded corners, responsive layout, and smooth transitions.

How to run:
- npm install
- npm start

Integrating real OAuth:
- Replace the `loginWithProvider` in `src/context/AuthContext.js` with real OAuth redirect or provider SDK, then handle response to set user state.
- Configure environment variables for OAuth client IDs and backend endpoints as needed (not required for UI demo).
