const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const binSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    binType: {
      type: String,
      required: true
    },
    location: {
      type: {
        type: String, 
        enum: ['Point'], 
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    fillPercentage: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Bin = mongoose.model("Bin", binSchema);

module.exports = Bin;
