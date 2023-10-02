const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    paragraphs: {
      type: String,
      default: "I am Petra!.",
    },
    imageUrl: {
      type: String,
      default: "/image.jpg", 
    },
  }
);

const About = mongoose.model('About', aboutSchema);

module.exports = {
  About,
};
