const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every book must have a name"],
    unique: [true, "Every book name must be unique"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
