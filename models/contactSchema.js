const mongoose = require("mongoose");

// Defining a Mongoose schema for the 'Contact' collection
const contactSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  age: Number,
  address: String,
});

// Creating a Mongoose model named 'Contact' based on the defined schema
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
