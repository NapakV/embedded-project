const express = require('express');
const cors = require('cors');
const audioRouter = require('./controllers/audio');

const app = express();
const PORT = 5001;

// Enable CORS so browser clients from other origins (e.g. Next dev) can POST
app.use(cors());

// Simple root route
app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

// Mount audio controller at /audio
app.use('/audio', audioRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});