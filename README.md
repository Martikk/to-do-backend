# Todo List Backend

This is the backend application for the Todo List project, built with Node.js, Express, and Sequelize, and deployed on Heroku.

## Features

- RESTful API for managing todo items
- CRUD operations for todos
- Connects to a MySQL database
- Uses Sequelize ORM for database operations

## Technologies Used

- Node.js
- Express.js
- Sequelize
- MySQL
- Heroku for deployment

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js
- npm or yarn
- MySQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list-backend.git
   cd todo-list-backend

2. Clone the repository:
   ```bash
    npm install
    # or
     yarn install
3. Create a .env file in the root directory and add the following:
   ```bash
    DATABASE_URL=mysql://username:password@localhost:3306/todo_db

4. Update the config/config.js file with your database credentials.

5. Run database migrations:
   ```bash
    npx sequelize-cli db:migrate


6. Start the development server:
   ```bash
    npm start
    # or
    yarn start

### API Endpoints
- GET /todos - Retrieve all todos
- POST /todos - Create a new todo
- PUT /todos/:id - Update an existing todo
- DELETE /todos/:id - Delete a todo

### Deployment
The project is deployed using Heroku. Follow these steps to deploy your own instance:

1. Install the Heroku CLI:
   ```bash
    npm install -g heroku


2. Log in to Heroku:
   ```bash
   heroku login

3. Create a new Heroku app:
   ```bash
   heroku create your-app-name


4. Set environment variables:
   ```bash
   heroku config:set DATABASE_URL=mysql://username:password@localhost:3306/todo_db
5. Deploy the project:
   ```bash
    git push heroku main
### 


