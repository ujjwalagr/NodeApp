var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

Genre = require('./Models/genre')
Book = require('./Models/book')

app.use(bodyParser.json());

// Connect to Mongoose

mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection
app.get('/', function(req, res) {
    res.send('hello world')
})

// geting genre
app.get('/api/genres', function(req, res) {
        Genre.getGenres(function(err, genres) {
            if (err) {
                throw err
            }
            res.json(genres)
        })
    })
    // add genre
app.post('/api/genres', function(req, res) {
    var genre = req.body
    Genre.addGenre(genre, function(err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre)
    })
})

// geting genre
app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books) {
        if (err) {
            throw err
        }
        res.json(books)
    })
})

app.get('/api/books/:_id', function(req, res) {
    Book.getBooksById(req.params._id, function(err, book) {
        if (err) {
            throw err
        }
        res.json(book)
    })
})

app.listen(9000)
console.log('Running')
