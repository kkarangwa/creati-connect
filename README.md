**CreatiConnect**

**Test the Platform
Access the platform by visiting** [https://67436906c17458ea7f2b579e--magnificent-squirrel-c352f8.netlify.app/) in your browser.

CreatiConnect is a platform designed for creatives to showcase their work, gain exposure, and interact with other creatives. Users can log in, share their work, and like others' contributions.

**Features**
User Authentication: Sign up, log in, and log out functionality.
Share Work: Upload and share creative works.
Engagement: Like button for users to appreciate shared work.
Live Demo
The platform is hosted on Netlify. You can access it here:
CreatiConnect Live Demo

**Prerequisites**
To run this project locally, ensure you have:

Node.js (v14 or higher)
MongoDB (locally or cloud-hosted)
How to Set Up and Run Locally
Clone the Repository:
Download the project code to your local machine:

bash
Copy code
git clone <repository-url>
Replace <repository-url> with the actual repository link.

Install Backend Dependencies:
Navigate to the project folder and install required packages:

bash
Copy code
npm install
Set Up Environment Variables:
Create a .env file in the root directory with the following:

plaintext
Copy code
MONGO_URI=your_mongo_database_connection_string
JWT_SECRET=your_secret_key
Replace your_mongo_database_connection_string with your MongoDB URI, and your_secret_key with a random string for token security.

Install Frontend Dependencies:
Navigate to the frontend directory:

bash
Copy code
cd client
npm install
Run the Project:

Start the backend:
bash
Copy code
npm run server
Start the frontend:
bash
Copy code
cd client
npm start
Access the Project Locally:
Open your browser and go to:


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  
