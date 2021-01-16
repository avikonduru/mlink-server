const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//Import Routes
const taskRoute = require('./routes/task');

dotenv.config();

//Middlewares
app.use(cors());
app.use(express.json());

//Route Middlewares
app.use('/v1/task', taskRoute);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
