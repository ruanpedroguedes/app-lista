const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }).then(() => {
          console.log('MongoDB connected');
        }).catch(err => {
          console.error('MongoDB connection error:', err);
        });
        
        
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
