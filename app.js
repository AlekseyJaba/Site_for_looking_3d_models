const express =require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const {Err_road, Check_Api,hell, morg} = require('./api/Midlwear.js');
const router = require('./api/router.js');

const HOST = '127.0.0.1';
const PORT = '5000';
const app = express();

app.use(hell);
app.use(morg);
app.use(bodyParser.json());
express.static('publick');

app.use('/',Check_Api, router);
app.use(Err_road);

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});