const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();



// Test Route
app.get('/', (req, res) => {
    res.send('E-commerce API is running...');
});

// Server Listener
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
