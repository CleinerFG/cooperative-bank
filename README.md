# Cooperative Bank

## README File Languages

- [English](README.md)
- [Portuguese-BR](README-pt.md)

## Description

This is a Single Page Application (SPA) web project simulating a cooperative bank between people, built using `HTML`, `CSS`, and `JavaScript`. The project utilizes `webpack` to compile and optimize files. It is divided into two main parts: `app` and `public`.

The server is implemented with `Express.js`, but currently serves as a basic setup for front-end testing features.

The project follows the MVC architecture, organizing functions and classes modularly to adhere to OOP principles. It emphasizes clean code practices, using JSDoc to enhance understanding and maintainability.

## SPA: app and public

- **`app`**: The logged-in area of the application, providing bank-related front-end features such as loans, account overview, balance tracking, and other functionalities.

- **`public`**: The unlogged area, including the landing page, login, and registration features.

## Project Structure

- **`client/`**: Contains front-end files.
- **`server/`**: Contains back-end files.
- **`testing/`**: A dedicated space for testing new features.

### Front-end

- **`global/`**: Classes, functions, and CSS styles shared between `App` and `Public`.
- **`app/` - `public/`**: Classes, components, implementations, and CSS styling specific to each one.

### Back-end

- **`db/`**: Data files for the test APIs, from the front end.

## Initialization

### Install Dependencies

- Run the command at the root of the project **`/`**.
  ```bash
  npm run install
  ```

### Project Config

- `Ip and Port`: Sets the server location.

  - Create a file `.env` in **`server/.env`** and **`client/.env`**.

    - **`server/.env`**:

    ```
    IP=localhost
    PORT=8080
    ```

    - **`client/.env`**:

    ```
    SERVER_IP=localhost
    SERVER_PORT=8080
    ```

  **Note:** To configure the server at another address, simply update the variables in both. By default it is set to `locahost:8080`.

### Start (Development or Production)

- Run the commands at the project root **`/`**.

- `Production Mode`:

  ```bash
  npm run start:client
  npm run start:server
  ```

- `Development Mode`:

  ```bash
  npm run dev:client
  npm run dev:server
  ```

  - **`server/.env`**: Add `NODE_ENV=production`, by default this variable is set to `development`.

- `Dev-test`: Where there are server requests, there are skelons or loaders. When running the server locally, you need to add a delay to make them visible.

  - Set the time in seconds **`client/src/global/js/constants/config.js`**:

    ```js
    const SIMULATE_SERVER_WAIT = 3;
    ```

  - In the production environment, if you don't want use the `simulateWait()` function, simply use `Ctrl + Shift + F` in VS Code to find all function calls and remove them.
