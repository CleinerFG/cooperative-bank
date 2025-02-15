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

```bash
npm install
```

### Start Project

- `Server IP`: Set the server location.

  - Create a `.env` file in the root of the project with the variable:

    ```
    SERVER_IP=localhost
    ```

  - Set the IP address in the global constant **`client/src/global/js/constants.js`**:

    ```js
    const SERVER_IP = 'localhost';
    ```

  **Note:** To set up the server on the local network, replace `locahost` with the local IP address.

- `Front-end`: Build the project using `webpack`.

  ```bash
  npm run build
  ```

- `Back-end`: Start the local server with `Express.js`.

  - Note: The server is currently a basic implementation for testing front-end functionalities. A more robust version is planned for future updates.

  ```bash
  npm run server
  ```

- `Dev-test`: Where there are server requests, there are skelons or loaders. When running the server locally, you need to add a delay to make them visible.

  - Set the time in seconds **`client/src/global/js/constants.js`**:

    ```js
    const SIMULATE_WAIT_SERVER = 3;
    ```

  - In the production environment, if you don't want use the `simulateWait()` function, simply use `Ctrl + Shift + F` in VS Code to find all function calls and remove them.