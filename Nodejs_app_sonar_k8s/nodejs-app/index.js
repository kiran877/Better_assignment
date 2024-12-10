const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Application!');
});

// API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, World!', timestamp: new Date() });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
