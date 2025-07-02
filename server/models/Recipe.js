const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
