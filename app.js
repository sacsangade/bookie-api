const express = require('express');
const cors = require('cors');
const Dotenv = require('dotenv');
Dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes');
const connectDB = require('./config/db');

connectDB();
var bodyParser = require('body-parser');

app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.urlencoded({
        extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); 
app.use(routes);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
