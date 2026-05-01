# Hello World Project

A full-stack web application with **NestJS backend** and **Next.js frontend**.

## 🏗️ Project Structure

```
hello-world/
├── backend/               # NestJS API (port 3000)
│   ├── src/
│   │   ├── main.ts       # Application entry point
│   │   ├── app.module.ts # Root module
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   ├── test/             # E2E tests
│   ├── Dockerfile        # Production Docker image
│   └── package.json
├── frontend/             # Next.js App (port 3001)
│   ├── app/              # Next.js 13+ App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── public/           # Static assets
│   ├── Dockerfile        # Production Docker image
│   └── package.json
├── docker-compose.yml     # Production Docker compose
├── docker-compose.dev.yml # Development Docker compose
└── setup.sh              # Project setup script
```

## 🚀 Quick Start

### Option 1: Using Setup Script (Recommended)

```bash
# Run the setup script to create the entire project
./setup.sh
```

### Option 2: Manual Setup

```bash
# Backend
cd backend
npm install
npm run start:dev

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

## 📋 Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher
- **Docker Desktop** (for Docker option)

## 🐳 Running with Docker

### Development Mode

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Production Mode

```bash
docker-compose up --build
```

## 🌐 Access Points

| Service | URL | Description |
|---------|-----|-------------|
| Backend API | http://localhost:3000 | NestJS REST API |
| Frontend | http://localhost:3001 | Next.js Web App |

## 📦 Available Scripts

### Backend

| Command | Description |
|---------|-------------|
| `npm run build` | Build the application |
| `npm run start` | Start the application |
| `npm run start:dev` | Start with hot reload |
| `npm run start:debug` | Start with debugging |
| `npm run start:prod` | Start production build |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |
| `npm run lint` | Lint and fix code |

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Lint code |

## 🔧 Environment Variables

### Frontend
- `PORT=3001` - Frontend server port (default: 3001)

### Backend
- Uses default NestJS configuration

## 🐙 Git Setup

```bash
# Initialize git (if not already)
git init

# Add remote
git remote add origin git@github.com:jasonhdes/hello-world.git

```

## 📝 API Endpoints

### Backend (NestJS)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Returns "Hello World!" |

## 🛠️ Technology Stack

- **Backend**: NestJS 11.x, TypeScript 5.7
- **Frontend**: Next.js 16.2, React 19.2, Tailwind CSS 4
- **Container**: Docker, Docker Compose

## 📄 License

UNLICENSED
