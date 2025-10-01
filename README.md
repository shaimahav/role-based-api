# 🔐 Role-Based Access Control API (Node.js + PostgreSQL)

A backend API built with **Node.js** and **PostgreSQL**, implementing **Role-Based Access Control (RBAC)**.  
This project demonstrates secure authentication and authorization using **JWT** and a modular Express.js structure.

---

## 🚀 Tech Stack

- **Node.js**  
- **Express.js**  
- **PostgreSQL**  
- **pg** (PostgreSQL client)  
- **JWT** (JSON Web Tokens for authentication, stored in `utils/`)  
- **dotenv** (environment variable management)  

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/role-based-api.git
cd role-based-api
npm install

1.	Create a file config/config.env
2.	Add the following environment variables

PORT=8000
DB_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret_here

Or refer to .env.example

3. Start the server
npm start
