const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 1080
require('dotenv').config();
const homePageCmsRoute = require('./routes/homePageRoute');
const servicePageCmsRoute = require('./routes/servicePageRoutes');
const contactPageCmsRoute = require('./routes/contactPageRoutes');
const aboutPageCmsRoute = require('./routes/aboutPageRoutes')


//Initialize App
const app = express();

//Core Middlewares
app.use(express.json());
app.use(cors());

//Connect DB
async function connectDb() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongoose Connection has been established @${connection.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

//Index Route
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Champions Logistic CMS API</h1>`)
})

//API Routes Middlewares
app.use('/homepage', homePageCmsRoute);
app.use('/servicepage', servicePageCmsRoute);
app.use('/contactpage', contactPageCmsRoute);
app.use('/aboutpage', aboutPageCmsRoute);


//Establish Database Connection before listening to port
connectDb()
.then(() => {
    app.listen(port, ()=> {
        console.log(`Server is running on ${port}`)
    })
})