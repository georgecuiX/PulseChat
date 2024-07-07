# PulseChat

## Description
This project is a real-time chat application leveraging .NET SignalR for instant communication, Angular for the frontend interface, and a Python AI chatbot for interactive responses.

## Tech Stack
Frontend: Angular
Backend: .NET Core
Real-time Communication: SignalR
AI Chatbot: Python
Database: SQLite

## Functionalities
* Real-time Messaging: Instant messaging between users using SignalR.
* AI Chatbot Integration: A Python-based AI chatbot that responds to user queries.
* User Authentication: Secure login and registration functionality.
* Message History: Persistent storage of chat history using SQLite.
* User Interface: A clean and responsive UI built with Angular.

## Prerequisites
* Node.js and npm
* .NET SDK
* Python 3.x

## Installation

### Clone the repository:
```
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app
```

### Frontend Setup:
```
cd ChatAppFrontend
npm install
npm start
```

### Backend Setup:
```
cd ../ChatAppBackend
dotnet restore
dotnet build
dotnet run
```

### AI Chatbot Setup:
```
cd ../Chatbot
pip install -r requirements.txt
python chatbot.py
```

## Usage
* Navigate to http://localhost:4200 to access the frontend interface.
* The backend will be running on http://localhost:5000.
* Ensure the AI chatbot server is running and accessible.

### Troubleshooting
* If you encounter CORS issues, ensure the backend CORS policy is correctly configured.
* Ensure all services (frontend, backend, and chatbot) are running without errors.

### License
This project is licensed under the MIT License.

## Future Enhancements
* User Profiles: Implement user profile management.
* Group Chat: Enable group chat functionality.
* File Sharing: Allow users to share files within the chat.
* Notifications: Add real-time notifications for new messages and events.
