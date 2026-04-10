# TrailBudget

A hiking trip planner that helps you estimate costs and compare trips before you hit the trail.

## Features

- Create and save hiking trips with detailed cost breakdowns
- Track gas, food, permit, and gear costs per trip
- Compare saved trips side by side
- Built with a typed data model using TypeScript interfaces

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** CSS Modules
- **Language:** TypeScript

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
git clone https://github.com/GitAtMike/trail-budget.git
cd trail-budget/frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure
frontend/
├── src/
│   ├── components/    # Reusable UI components (Navbar)
│   ├── pages/         # Home, NewTrip, SavedTrips
│   ├── types/         # TypeScript interfaces (Trip, TripFormData)
│   └── App.tsx        # Root component with routing

## Status

Frontend complete. Backend (FastAPI + PostgreSQL) in progress.
