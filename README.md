# Freelo

**One dashboard for your entire freelance business.**

Freelo replaces the scattered tools freelancers juggle — Excel for invoices, WhatsApp for client communication, Google Drive for files, Notion for notes, and Google Calendar for meetings — with a single, unified platform for managing clients, projects, tasks, invoices, payments, and documents.

---

## Tech Stack

### Frontend
- React 19 + TypeScript
- Vite
- React Router DOM
- TanStack Query
- Zustand
- React Hook Form + Zod
- Firebase (client SDK — Auth, Storage)

### Backend
- NestJS + TypeScript
- Firebase Admin SDK (Firestore, Auth verification, Storage)
- Passport + JWT

### Database & Storage
- Firebase Firestore (NoSQL document store)
- Firebase Storage (contracts, invoices, documents)
- Firebase Authentication (email/password, Google login)

---

## Project Structure

```
freelanceflow/
├── backend/                  NestJS API
│   └── src/
│       ├── auth/             Login, signup, JWT/Firebase auth guards
│       ├── clients/          Client CRUD
│       ├── projects/         Project CRUD
│       ├── tasks/            Task CRUD, Kanban logic
│       ├── invoices/         Invoice generation
│       ├── payments/         Payment tracking
│       ├── meetings/         Meeting scheduling
│       ├── documents/        File upload/download via Firebase Storage
│       ├── notifications/    Real-time notifications
│       ├── reports/          PDF/Excel export
│       ├── activities/       Audit log
│       └── common/           Shared decorators, filters, interceptors
│
├── frontend/                 React + Vite app
│   └── src/
│       ├── pages/            Route-level page components
│       ├── routes/           React Router config, protected routes
│       ├── components/       Reusable UI (layout, forms, charts, tables)
│       ├── features/         Feature-specific logic per domain
│       ├── lib/               API client, Firebase client, validation
│       ├── hooks/             Custom React hooks
│       ├── services/          API call wrappers
│       ├── store/             Zustand stores
│       └── types/             Shared TypeScript types
│
└── README.md
```

---

## Core Features

- Secure authentication (email/password, Google login, email verification, password reset)
- Client management with contact details, notes, and document history
- Project tracking with Kanban, list, and calendar views
- Task boards with drag-and-drop status updates
- Invoice generation with PDF export
- Payment tracking (received, pending, overdue, partial)
- Meeting scheduling with reminders
- Document uploads (contracts, invoices, design files)
- Activity timeline and audit logging
- Real-time notifications
- Global search across clients, projects, invoices, and tasks
- Reports with PDF, Excel, and CSV export
- Dashboard with revenue charts, project status, and upcoming meetings

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm
- A Firebase project (Firestore, Authentication, and Storage enabled)

### 1. Clone the repository

```bash
git clone https://github.com/Chetan13334/Freelo.git
cd freelo
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with your Firebase Admin credentials:

```
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
JWT_SECRET=
PORT=8080
```

Run the backend:

```bash
npm run start:dev
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in `frontend/` with your Firebase client config:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_BASE_URL=http://localhost:8080
```

Run the frontend:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`, with the API running at `http://localhost:8080`.

---

## Roadmap (Future / v2)

- Team collaboration with invitations and role-based access
- Time tracking for billable hours
- Expense tracking
- Client-facing portal for approvals and downloads
- Recurring invoices and subscriptions
- Stripe payment integration
- AI-assisted meeting summaries and proposal generation
- Mobile app (React Native)

---

## License

This project is currently unlicensed and intended for personal/portfolio use.
