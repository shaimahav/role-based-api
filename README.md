🔐 Role-Based Access Control API (Node.js + PostgreSQL)
A backend API built with Node.js and PostgreSQL, implementing role-based access control (RBAC) with modular structure.

🚀 Tech Stack
Node.js
Express.js
PostgreSQL
pg (PostgreSQL client)
JWT (stored in utils)
dotenv
⚙️ Setup Instructions
git clone https://github.com/your-username/role-based-api
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
