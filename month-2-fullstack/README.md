# AUREX Internship — Month 2 Full-Stack Task Manager

This folder adds the Month 2 full-stack implementation while preserving the original Week 1–4 React project at the repository root.

## Stack
- React 18 + Vite frontend
- Node.js + Express REST API
- MongoDB Atlas + Mongoose
- JWT authentication and bcrypt password hashing

## Features
- Register and sign in
- Authenticated, per-user task CRUD
- Complete / uncomplete tasks
- Search and status filters
- External REST API sample dashboard with async loading
- Responsive dark interface

## Run locally

### 1. Backend
Open a terminal:
```bash
cd month-2-fullstack/server
npm install
```
Copy `.env.example` to `.env`, then fill in:
- `MONGO_URI`: your MongoDB Atlas connection string
- `JWT_SECRET`: a long random secret (never commit the real value)
- `CLIENT_URL=http://localhost:5173`

Start:
```bash
npm run dev
``
The API runs at `http://localhost:5000`. Health check: `GET /api/health`.

### 2. Frontend
Open a second terminal:
```bash
cd month-2-fullstack/client
npm install
```
Copy `.env.example` to `.env`. For local use, keep:
```env
VITE_API_URL=http://localhost:5000/api
``
Start:
```bash
npm run dev
``
Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## REST API
| Method | Endpoint | Auth | Purpose |
|---|---|---:|---|
| GET | `/api/health` | No | API health check |
| POST | `/api/auth/register` | No | Create account |
| POST | `/api/auth/login` | No | Sign in |
| GET | `/api/tasks` | Yes | List current user's tasks |
| POST | `/api/tasks` | Yes | Create task |
| PATCH | `/api/tasks/:id` | Yes | Update title/completed |
| DELETE | `/api/tasks/:id` | Yes | Delete task |
| GET | `/api/demo/posts` | No | External API integration demo |

Protected requests require:
`Authorization: Bearer <JWT>`

## MongoDB collections
- `users`: name, unique email, bcrypt password hash, timestamps
- `tasks`: title, description, completed, user reference, timestamps

## Deployment outline
1. Create a MongoDB Atlas database and copy its connection string.
2. Deploy `server` to a Node hosting service. Add `MONGO_URI`, `JWT_SECRET`, and `CLIENT_URL` as environment variables.
3. Deploy `client` to Vercel. Set `VITE_API_URL` to the deployed backend URL plus `/api`.
4. Update backend `CLIENT_URL` to the deployed frontend origin and redeploy.
5. Test registration, login, task create/update/delete, API health and dashboard sample posts.

## Security notes
- Do not commit real `.env` files or database credentials.
- Passwords are hashed with bcrypt before storage.
- JWT-protected task routes scope each operation to the authenticated user.
- Use a long, unique JWT secret in production and HTTPS on deployed services.

## Assessment mapping
- Task 1: React component-based task manager UI and local UI state
- Task 2: fetch-based external API dashboard and asynchronous states
- Task 3: Express REST API, Mongoose models and MongoDB CRUD
- Task 4: registration/login, bcrypt, JWT and protected routes
- Integration: React frontend communicates with the Express API
