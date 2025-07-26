# Chat App 🗨️

A simple web-based Chat Management App using Node.js, Express, MongoDB, and EJS.  
This app allows users to **create**, **read**, **update**, and **delete** (CRUD) chat messages.

---

## 📁 Folder Structure

```
MONGODB-CHAT-APP/
├── models/
│   └── chat.js                # Mongoose schema for chat messages
├── public/
│   └── style.css              # Styling for the chat pages
├── views/
│   ├── index.ejs              # Homepage displaying all chats
│   ├── newChat.ejs            # Form to create new chat
│   └── updateChat.ejs         # Form to update existing chat
├── index.js                   # Main app entry point
├── init.js                    # DB seed script to add sample data
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Features

- ✅ View all chat messages  
- 📝 Create a new chat  
- ✏️ Update an existing chat  
- ❌ Delete a chat (method-override used for DELETE)

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS (templating)
- Method-Override
- CSS

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run MongoDB locally

Make sure MongoDB is installed and running on `mongodb://127.0.0.1:27017/`.

You can use this in your code (likely in `index.js`):

```js
mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
```

### 4. Start the server

```bash
node index.js
```

Or use:

```bash
nodemon index.js
```

### 5. Seed initial data (optional)

```bash
node init.js
```

---

## 🌐 Routes

| Route                  | Method | Description                     |
|-----------------------|--------|---------------------------------|
| `/chats`              | GET    | View all chats                  |
| `/chats/new`          | GET    | Form to create new chat         |
| `/chats/:id`          | POST   | Update existing chat (method override) |
| `/chats/:id/delete`   | DELETE | Delete a chat (method override) |
| `/chats/:id/update`   | GET    | Render update form              |

---

## 📄 .gitignore

```gitignore
node_modules/
```

---

## ✨ Future Improvements

- Add authentication
- Real-time messaging using Socket.io
- Add timestamp formatting (e.g., "2 mins ago")
- Dark mode toggle 🌙

---

## 📸 Screenshots

_Add screenshots of the chat UI here if needed._

---

## 👩‍💻 Author

Made with ❤️ by [Your Name]  
Inspired by basic MERN stack principles and beginner-friendly CRUD apps.

---
