# AntColony Case Study (Backend)
A CI/CD web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and Docker.

![Logo](https://github.com/Adnan251/AntColonyBackend/blob/main/Logo.png)

## Description
This app is made as a Case Study with AntColony company. The goal of the case Study was to make a functioning CI/CD web application. This app should be able to copy a github repozitory, build the app, run tests and finay deploy the project. It also uses a DSL (Domain Specific Language) which has been written in JSON which alows the user to simply edit his pipeline and also alows us as developers to easily manipulate that pipeline as we want.

## Features

* The User is able to login and register
* The User is able to Add, Update and Delete Projects
* The User is able to watch how the pipeline is progressing
* The User is prompted with several options for languanes to use (Python, Java, PHP, JavaScript, C#)
* The user is prompted with a DSL  to help with seting up a project

## Technologies used

* The CI/CD web application is built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack and Docker for containerization. The MERN stack is a popular combination of technologies for developing full-stack web applications. **MongoDB** is a NoSQL database that provides flexibility and scalability for storing application data. **Express.js** is a lightweight web application framework for building robust APIs and handling server-side logic. **React.js** is a powerful JavaScript library for building interactive user interfaces on the frontend. **Node.js** is a JavaScript runtime environment that allows us to run JavaScript code on the server-side. **Docker** is a containerization platform that enables easy packaging and deployment of the application and its dependencies.

* On the backend, we utilize several libraries to enhance functionality and security. **bcrypt** provides password hashing and encryption for secure user authentication. **cors** enables cross-origin resource sharing, allowing the backend to handle requests from different domains. **crypto-js** offers cryptographic functions for secure data manipulation. **dotenv** allows us to load environment variables from a .env file, keeping sensitive information separate from the codebase. **express** provides a robust framework for handling HTTP requests and building APIs. **jsonwebtoken** facilitates the generation and verification of JSON Web Tokens for user authentication and authorization. **mongoose** is an Object Data Modeling (ODM) library for MongoDB, simplifying database operations. **qrcode** helps generate QR codes for various purposes. **simple-git** is a Git library that allows us to perform Git operations programmatically. **speakeasy** offers support for two-factor authentication using one-time passwords. **validator** provides validation functions for input data to ensure data integrity.

* On the frontend, we leverage several libraries to create a seamless user experience. **axios** is used for making HTTP requests to the backend API. **react** is the core library for building the user interface, providing reusable components and state management. **react-dom** is responsible for rendering React components into the browser DOM. **react-icons** offers a wide range of icon packs to enhance the UI with visually appealing icons. **react-jwt** provides utilities for working with JSON Web Tokens in React applications. **react-router-dom** is a routing library for handling navigation and URL management in React applications. **react-scroll** enables smooth scrolling to anchor links within the application.

* By combining these technologies and libraries, we develop a robust CI/CD web application that incorporates secure user authentication, database management, API handling, and a responsive frontend interface.

## Installation
* Follow these steps to install and set up this CI/CD web application:  
Frontend: https://github.com/ishak-dev/AntColony-Frontend  
Backend: https://github.com/Adnan251/AntColonyBackend
 
### Backend 
1. Clone the repository:  
` git clone https://github.com/Adnan251/AntColonyBackend.git `  
3. Install Dependencies:  
` npm install `  
4. Build the Docker image for the backend:  
` docker build -t your-image-name . `  
5. Start the Docker container for the backend:  
` docker run -p 5000:5000 your-image-name `  
The backend server will be accessible at **http://localhost:5000**  

### Frontend 
1. Clone the repository:  
` git clone https://github.com/ishak-dev/AntColony-Frontend.git `  
2. Install Dependencies:  
` npm install `  
3. Start Frontend App:  
` npm start `

## Routes
### User
* **POST /api/users/register**
* **POST /api/users/login**
* **GET /api/users/mfa**
* **POST /api/users/mfa**

### Project
* **POST /api/project/addProject**
* **DELETE /api/project/deleteProject**
* **GET /api/project/getProject**

### PipeLine
* **POST /api/pipe/executePipe**

## Contributors

* Adnan Džindo (https://github.com/Adnan251)
* Ema Kavazović-Devedžić (https://github.com/EmaKD)
* Ishak Kazić (https://github.com/ishak-dev)
