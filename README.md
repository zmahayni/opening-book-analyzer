# opening-book-analyzer

Chess opening book analyzer.

## Structure

- `backend/` — Flask API
- `frontend/` — React + TypeScript + Vite

## Running

Two terminals.

**Backend** (http://127.0.0.1:5000):

```sh
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python app.py
```

**Frontend** (http://localhost:5173):

```sh
cd frontend
npm install
npm run dev
```

The Vite dev server proxies `/api` to the Flask backend, so the frontend calls
`/api/...` with no host and no CORS setup needed in development.

## Endpoints

- `GET /api/health` — returns `{"status": "ok", "service": "opening-book-analyzer"}`
