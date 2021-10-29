const mongoose = require("mongoose");

const clubModel = require("./clubModel");

const memberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every member must have a name"],
      unique: [true, "Every member name must be unique"],
    },
    clubs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Club",
      },
    ],
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

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
