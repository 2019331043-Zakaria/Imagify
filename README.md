# 🖼 PixelAI

PixelAI is an AI-powered **text-to-image generation** web application built with the **MERN stack**. It allows users to input a text prompt and generate stunning images using **ClipDrop's image generation API**. Users can also **download** the generated images.

## 🚀 Features

- 🎨 Convert text prompts into AI-generated images
- 💾 Download generated images instantly
- ⚡ Fast and responsive UI built with React + TailwindCSS
- 🌐 Backend API powered by Node.js + Express
- 🧠 AI integration via ClipDrop (Stability.ai)

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Service**: ClipDrop API (by Stability.ai)

## 📸 Demo
vercel link : https://pixelai-liard.vercel.app/ <br>

https://github.com/user-attachments/assets/34209f43-b7ee-4e68-8019-bd8f60096f12

## 📥 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/2019331043-Zakaria/PixelAI.git
cd PixelAI
```

### 2. Setup the Backend

```bash
cd server
npm install
# Create a .env file with your configuration
npm start
```

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

### 4. Environment Variables

#### 🔑 Server `.env`

```
CLIPDROP_API_KEY=your_clipdrop_api_key
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
```

#### 🔑 Client `.env`

```
VITE_BACKEND_URL=your_backend_url
```

## 🧠 How It Works

1. User enters a prompt (e.g., *"A futuristic city in space"*)  
2. The backend sends the prompt to ClipDrop's image generation API  
3. ClipDrop responds with an AI-generated image  
4. The image is shown in the UI and can be downloaded  

## 📂 Project Structure

```
PixelAI/
├── client/      # React Frontend
├── server/      # Node.js Backend
└── README.md
```


---
