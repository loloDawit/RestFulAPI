const GList = require('../models/grocerylist.model');

// Create and Save a new grocery-list
exports.create = (req, res) => {
    // Validate request body content
    if (!req.body.content) {
        return res.status(400).send({
            message: 'Grocery list content can not be empty.'
        });
    }
    // Create a new Grocery list
    const gList = new GList({
        title: req.body.title || 'Untitled Grocery List',
        content: req.body.content
    });
    // Save the Grocery list in the database
    gList.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating the grocery list."
        });
    });
};

// Retrieve and return all grocery-list from the database.
exports.findAll = (req, res) => {
    GList.find().then(gList => {
        res.send(gList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving grocery list."
        });
    });
};

// Find a single grocery-list with a listId
exports.findOne = (req, res) => {
    GList.findById(req.params.gListId).then(gList => {
        // Find grocery-list with an id
        if (!gList) {
            return res.status(404).send({
                message: "Grocery list not found with id " + req.params.gListId
            });
        }
        res.send(gList);
    }).catch(err => {
        if (err.kind == 'ObjectId') {
            return res.status(404).send({
                message: 'Grocery list not found with id ' + req.params.gListId
            });
        }
        return res.status(500).send({
            message: 'Error retrieving grocery list with id' + req.params.gListId
        });
    });

};

// Update a grocery-list identified by the listId in the request
exports.update = (req, res) => {
    // Validate request content 
    if (!req.body.content) {
        return res.status(400).send({
            message: "List content can not be empty"
        });
    }
    // Find gList and update it with the request body
    GList.findByIdAndUpdate(req.params.gListId, {
        title: req.body.title || 'Untitled Grocery list.',
        content: req.body.content
    }, {
        new: true
    }).then(data => {
        if (!data) {
            return res.status(404).send({
                message: "List not found with id " + req.params.gListId
            });
        }
        res.send(data);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "List not found with id " + req.params.gListId
            });
        }
        return res.status(500).send({
            message: "Error updating grocery list with id " + req.params.gListId
        });
    });

};

// Delete a grocery-list with the specified listId in the request
exports.delete = (req, res) => {
    GList.findByIdAndRemove(req.params.gListId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "List not found with id " + req.params.gListId
                });
            }
            res.send({
                message: "Grocery list deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "List not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
};