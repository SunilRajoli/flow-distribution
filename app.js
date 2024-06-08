const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const astrologerRoutes = require('./routes/astrologerRoutes');

const app = express();
app.use(express.json());
app.use('/api', astrologerRoutes);

// Basic endpoint to test if the server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
