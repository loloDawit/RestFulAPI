/** 
 * Defining routes
 */

module.exports = (app) => {
    const gLists = require('../controllers/list.controller.js');

    // Create a new grocery list
    app.post('/groceryLists', gLists.create);

    // Retrieve all grocery lists
    app.get('/groceryLists', gLists.findAll);

    // Retrieve a single grocery list with listId
    app.get('/groceryLists/:listId', gLists.findOne);

    // Update a grocery list with listId
    app.put('/groceryLists/:listId', gLists.update);

    // Delete a grocery list with listId
    app.delete('/groceryLists/:listId', gLists.delete);
}