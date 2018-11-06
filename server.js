/** 
 * Application main entry point 
 */

// Dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

// Assign library
mongoose.Promise = global.Promise; 

// Connect to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() =>{
    console.log({"Success":"Successfully connected to the database."});
}).catch(err => {
    console.log({"Error":"Could not connect to the database. With error....",err});
    process.exit();
});

// Create express app
const app = express();

// Pare requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// Define routes
app.get('/', (request, response) => {
    response.json({
        "Message" : "Welcome to GroceryList application. Organize your shopping and never miss a list."
    });
});
// Require grocery-list route
require('./app/routes/grocerylist.route')(app);
// Listen for request
const server = app.listen(3000, () => {
    console.log('Server is listing on port 3000');
})
module.exports = server