const mongoose = require("mongoose");

const clubSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every club must have a name"],
      unique: [true, "Every club name must be unique"],
    },
    location: {
      type: Point,
      required: [true, "Every club must have a location"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
