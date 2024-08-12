const express=require('express')
const cors=require('cors')
const mysql=require('./config/db')
require('dotenv').config()
const bannerRoutes = require('./routes/bannerRoutes')
const frontendurl=process.env.FRONTEND_URL

const app=express()
const PORT=process.env.PORT||5000;
app.use(express.json());
app.use(cors({
  origin: frontendurl, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

app.use('/api/banners',bannerRoutes)

//listening to port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
