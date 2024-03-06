const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

//viewEngine
app.use('/', webRouter);

//Router
configViewEngine(app);


app.listen(port, hostname, () => {
    // console.log(`Example app listening on port ${port}`)
    console.log(`Server running at http://${hostname}:${port}/`);
})