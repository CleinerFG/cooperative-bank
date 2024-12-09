const express = require('express');
const path = require('path');

const app = express();

// Middleware static files
app.use('/static', express.static(path.resolve(__dirname, 'client', 'static')));

// Middleware log Requests
app.use((req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.url}`);
  next();
});

// All ports serve index.html
app.get('/*', (req, res) => {
  const filePath = path.resolve(__dirname, 'client', 'index.html');
  console.log(`Send file: ${filePath}`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error loading file.');
    }
  });
});

// Init server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running -> http://localhost:${PORT}`);
});
