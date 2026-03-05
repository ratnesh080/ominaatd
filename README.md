2. Backend Setup
Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a .env file and add your credentials:

Code snippet
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5001
Start the server: node server.js (or npm start)

3. Frontend Setup
Navigate to the frontend folder: cd ../frontend

Install dependencies: npm install

Start the React app: npm start

🚦 How to Use
Open your browser to http://localhost:3000.

To test the specific requirement, enter:

Username: admin

Password: admin

You will be automatically navigated to the Welcome Page.

If you enter incorrect credentials, an error message will be displayed.

Note: Do not try to access http://localhost:5001/register directly in the browser. That URL is an API endpoint meant for POST requests only. Browsers perform GET requests by default, which will result in a "Cannot GET" message.

🛡️ Security Implementation
Passwords are never stored in plain text. We use a "Salt and Hash" method to ensure user data remains safe even if the database is accessed.

📜 License
This project is open-source and available under the MIT License.


---

### Pro-Tip for your GitHub
Make sure your folder structure looks like this before you push:
```text
/mern-login-app
  ├── backend/
  │    ├── models/
  │    ├── server.js
  │    └── .env (Hidden/Ignored)
  ├── frontend/
  │    ├── src/
  │    └── public/
  ├── .gitignore
  └── README.md
