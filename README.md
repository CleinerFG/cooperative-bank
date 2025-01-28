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

- `Front-end`: Build the project using `webpack`.

```bash
npm run build
```

- `Back-end`: Start the local server with `Express.js`.

  - Note: The server is currently a basic implementation for testing front-end functionalities. A more robust version is planned for future updates.

```bash
npm run server
```
