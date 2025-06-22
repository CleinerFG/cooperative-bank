# Cooperative Bank

## README Languages

- [English](README.md)
- [Portuguese-BR](README-pt.md)

## Description

This is a web project for a Single Page Application (SPA) that simulates a cooperative bank between individuals. The project is divided into two parts: `client` for front-end files, and `server` for back-end files.

## Technologies

### Client

- **`Core`**: Built with the `React.js` library.

- **`Routing`**: The library used for routing, page organization, and hierarchy is `React Router DOM`.

- **`Forms`**: The project uses `React Hook Form` and `Yup` for form management and validation.

- **`Styling and Animations`**: The project uses `Styled Components` for custom styled components and light/dark theme. For complex animations that depend on component mounting and unmounting, `Framer Motion` is used.

- **`Translation`**: The project currently supports two languages — English and Brazilian Portuguese — using the `React i18next` library.

- **`Initialization and Boilerplate`**: `Vite` is used for boilerplate, local development server, and bundling.

### Server

- **`Core`**: Built with the `Express.js` framework.

- **`Database`**: The DBMS used is `MySQL`, along with the `Sequelize` ORM library.

- **`Authentication`**: Authentication is handled via cookies sent from the server to the client using `JSON Web Token`.

- **`Static Validation`**: Pre-validation (such as data formats, types, etc.) — i.e., any validation that doesn't require database queries or business logic — is handled using middlewares with `Express Validator`.

- **`Architecture`**:
  - `Model`: Sequelize data model.
  - `Repository`: Query abstraction layer using the model.
  - `Service`: Business logic and validations with database access, consuming the repositories.
  - `Controller`: Direct HTTP communication with the client.

The project follows clean architecture, organizing functions and classes modularly to adhere to OOP principles, with emphasis on clean code practices.

## Getting Started

### Install Dependencies

- Run the command in **`/client`** and **`/server`**:
  ```bash
  npm install
  ```

### Project Configuration

- Create a `.env` file in **`server/.env`**.

  - **`server/.env`**: Configure the environment variables for the server and MySQL database:

    ```env
    NODE_ENV
    COOKIE_SECRET
    SERVER_HOST
    SERVER_PORT
    MYSQL_HOST
    MYSQL_PORT
    MYSQL_USER
    MYSQL_PASSWORD
    ```

### Modes (Development / Production)

- In **`/client`**:

  ```bash
  npm run dev
  npm run build
  ```

  Viewing the project in `http://localhost:5173/app` after running the `npm run dev` command.

- In **`/server`**:

  ```bash
  npm run dev
  npm start
  ```

- **Simulate Delay**: When there are requests to `/api`, the client displays skeletons or loaders. If the server is running locally, a delay must be added to the responses so that these elements are visible.

  - Set the time in milliseconds in the file **`server/src/constants/serverConstants.js`**:

    ```js
    const SIMULATE_RES_DELAY = 3000;
    ```

  - In the production environment, simply remove the middleware:

    File: **`server/src/server.js`**

    ```js
    app.use('/api', simulateDelayMiddleware);
    ```

## Future Implementations

- **`/client`**:

  - Data fetching from the server using `Axios` and state management with `React Query`.
  - Route protection based on authentication.
  - Testing with `Jest` and `React Testing Library`.

- **`/server`**:

  - Real-time communication with the client for sending notifications and authentication using `WebSockets`.
  - Storing user account settings and notifications using `MongoDB`.
  - Caching authenticated users with `Redis`, allowing full control by the server over authentication and deauthentication.
  - `Redis` will also help speed up SQL queries by storing both the real and opaque user IDs. Only the opaque ID will be exposed to the client.
  - Testing with `Jest`.
