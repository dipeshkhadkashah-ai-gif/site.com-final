const { createContact, getContacts } = require('../controllers/contactController');

const router = require('express').Router();

router.route('/create').post(createContact);

// get all contacts
router.route('/getcontacts').get(getContacts)

module.exports = router;