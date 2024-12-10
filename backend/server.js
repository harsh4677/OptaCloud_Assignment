const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const addressRoutes = require('./routes/addressRoutes');
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Database'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// All Routes
app.use('/api/address', addressRoutes);

app.use((req, res, next) => {
    res.status(404).json({ status:"Fail",
        error: 'Route not found' 
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ status:"Fail",
        error: 'Something went wrong. Please try again later.' 
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
