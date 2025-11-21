const express = require('express');
const app = express();
const PORT = 5001;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});