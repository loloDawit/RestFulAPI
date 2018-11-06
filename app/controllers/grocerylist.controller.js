const GList = require('../models/grocerylist.model');

// Create and Save a new grocery-list
exports.create = (req, res) => {
    // Validate request body content
    if(!req.body.content){
        return res.status(400).send({
            message:'Grocery list content can not be empty.'
        });
    }
    // Create a new Grocery list
    const gList = new GList({
        title: req.body.title || 'Untitled Grocery List',
        content: req.body.content
    });
    // Save the Grocery list in the database
    gList.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Error occurred while creating the grocery list."
        });
    });
};

// Retrieve and return all grocery-list from the database.
exports.findAll = (req, res) => {

};

// Find a single grocery-list with a listId
exports.findOne = (req, res) => {

};

// Update a grocery-list identified by the listId in the request
exports.update = (req, res) => {

};

// Delete a grocery-list with the specified listId in the request
exports.delete = (req, res) => {

};