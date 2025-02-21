# Learning Platform

An interactive coding challenge platform built with React and Django, designed to help developers master programming skills through practical exercises and real-world challenges.

## Features

- Interactive coding challenges
- Real-time code editor with syntax highlighting
- User authentication and progress tracking
- Leaderboard and achievements system
- Responsive modern UI with Chakra UI
- Structured learning paths

## Tech Stack

### Frontend
- React with Vite
- Chakra UI for styling
- Monaco Editor for code editing
- Zustand for state management
- React Router for navigation

### Backend
- Django REST Framework
- SQLite database (development)
- JWT Authentication
- Simple JWT for token management

## Getting Started

### Prerequisites
- Node.js
- Python 3.x
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kishore-67/PersistVenturesIntern.git
cd PersistVenturesIntern
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

4. Start the development servers

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
python manage.py runserver
```

## Project Structure

```
learning-platform/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── utils/        # Utility functions
│   │   └── services/     # API services
│   └── public/           # Static files
└── backend/              # Django backend
    ├── core/            # Django settings
    ├── api/            # REST API endpoints
    └── requirements.txt # Python dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

- **Kishore** - *Founder & Lead Developer*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
