/** 
 * Application main entry point 
 */

// Dependencies 
const express = require('express');
const bodyParser = require('body-parser');

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

// Listen for request
app.listen(3000, () => {
    console.log('Server is listing on port 3000');
})