/*
 * Defining the Grocery-list model in Mongoose 
 */

// Dependencies
const mongoose = require('mongoose');

// Design the schema
const GroceryListSchema = mongoose.Schema({
    title: String,
    content: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('List', GroceryListSchema);