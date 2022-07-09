const Contact = require("../models/contactModel");

//create contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      desc: req.body.desc,
    });

    const savedContact = await contact.save();
    res.json(savedContact);
  } catch(error) {
    res.json(error);
    console.log(error);
  }
};

const getContacts = async(req, res) => {
  try {
    const contact = await Contact.find()
    res.status(200).json({
      success: true,
      contact
    })
    
  } catch (error) {
    res.status(500).json({
      succss: false,
      message:"failed to get contacts!"
    })
  }
}

module.exports = { createContact, getContacts };
