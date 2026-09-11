# Smart Crop Procurement and Queue Management System

Frontend foundation for SIH 2026 preparation.

## Stack
- React + Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React (small icon library)

## Run
```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Scope
This build intentionally contains no backend, database, real authentication, Maps, Twilio, Socket.io, real QR scanning, Aadhaar verification, or payment functionality.

Mock data lives in `src/data/`.
The future API boundary is `src/services/api.js`.

Tomorrow, replace the service-layer mock functions with calls to the Node/Express API while keeping the page/component structure intact.
