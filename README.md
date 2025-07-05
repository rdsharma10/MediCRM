🏥 #MediCRM – Medical Device CRM & Inventory Management Dashboard

MediCRM is a full-featured admin dashboard built using React, Vite, and Material UI. It is designed for managing medical device inventories, tracking installations, service visits, AMC/CMC contracts, and maintaining facility-specific CRM histories including training, feedback, and documentation.

🚀 Tech Stack

⚛️ React 19

⚡ Vite 7

🎨 Material UI (MUI v7)

🧠 Redux Toolkit

🧩 React Router DOM v7

💬 React Toastify

🎞️ GSAP (Animations)

🧹 UUID, SCSS, Emotion

📦 Project Structure

.
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md

🛠️ Setup & Installation

Clone the repository

git clone https://github.com/rdsharma10/MediCRM.git
cd MediCRM

Install dependencies

npm install

Start the development server

npm run dev

Lint the code (optional)

npm run lint

Build for production

npm run build

Preview production build

npm run preview

🧪 Linting Configuration

The project uses ESLint with recommended React rules:

eslint-plugin-react-hooks

eslint-plugin-react-refresh

Global ignore: dist/

You can customize rules in eslint.config.js.

📁 Git Ignore

The .gitignore file excludes:

node_modules/

dist/

Editor-specific configs like .vscode/, .idea/, etc.

🧑‍💻 Developer Notes

Entry Point: src/main.jsx

Uses React 19 JSX runtime

Styled using Emotion and SCSS

Animations powered by GSAP

Routing handled by react-router-dom
