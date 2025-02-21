# Interactive Learning Platform

An interactive learning platform where users can participate in coding and knowledge challenges, with seamless integration between a web interface and a Telegram bot.

## Project Structure

```
learning-platform/
├── frontend/           # React + Vite frontend
├── backend/           # Django + FastAPI backend
└── docs/             # Project documentation
```

## Tech Stack

- Frontend: Vite + React
- Backend: Django + FastAPI
- Database: PostgreSQL
- Authentication: JWT
- Real-time: WebSocket
- Bot Integration: Telegram

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On Unix or MacOS:
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

## Features

### Challenge Interface
- Interactive challenge viewer with syntax highlighting
- Real-time progress tracking
- Submission history and feedback display
- Markdown support for challenge content
- Code editor for programming challenges

### User Dashboard
- Progress overview with visual statistics
- Completed and ongoing challenges
- Achievement badges and rewards
- Personal performance analytics

### Community Features
- Global and challenge-specific leaderboards
- Discussion sections for each challenge
- User profiles with achievement showcases
- Social sharing capabilities

## API Documentation

API documentation will be available at `/api/docs` once the backend server is running.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
