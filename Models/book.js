var mongoose = require('mongoose')

// Books Schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    publisher: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

var Book = module.exports = mongoose.model('Book', bookSchema)

// get books  
module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit)
}
module.exports.getBooksById = function(id, callback) {
    Book.findById(id, callback)
}