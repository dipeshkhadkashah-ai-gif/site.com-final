const router = require('express').Router();
const Book = require('../models/bookModel')
const {bookPhotographer, getAllBook, getABook, deletebook} = require('../controllers/bookcontroller')

// Book a photographer
router.route('/booknow').post(bookPhotographer)

// get all book
router.route('/bookings').get(getAllBook)

// get a book
router.route('/:id').get(getABook)

// delete a book
router.route('/:id').delete(deletebook)

module.exports = router;
