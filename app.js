const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const planRoutes = require('./routes/planRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/plans', planRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
