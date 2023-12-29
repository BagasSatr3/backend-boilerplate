## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/BagasSatr3/mongoose-express-boilerplate.git
   cd mongoose-express-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install   # or yarn install
   ```

3. Set up your MongoDB database:

   - Create a MongoDB database.
   - Update the database connection details in `/config/database.js`.

4. Start the server:

   ```bash
   npm start   # or yarn start
   ```

   The server will run on `http://localhost:3000` by default.

## Project Structure

```
/mongoose-express-boilerplate
|-- /src
|   |-- /controllers
|   |   |-- userController.js
|   |   |-- postController.js
|   |-- /models
|   |   |-- User.js
|   |   |-- Post.js
|   |-- /routes
|   |   |-- userRoutes.js
|   |   |-- postRoutes.js
|-- /config
|   |-- database.js
|-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

## Features

- Express server with basic routes.
- Mongoose integration for MongoDB.
- User and Post model examples.
- CORS enabled for cross-origin requests.
- Nodemon for automatic server restart during development.
