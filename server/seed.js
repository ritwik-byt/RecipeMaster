const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Recipe = require("./models/Recipe");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected for seeding");
    return Recipe.insertMany([
      {
        title: "Paneer Butter Masala",
        ingredients: ["Paneer", "Tomato", "Cream", "Spices"],
        instructions: "Cook everything together and garnish with cream.",
        image: "https://source.unsplash.com/400x300/?paneer",
      },
      {
        title: "Veg Biryani",
        ingredients: ["Rice", "Vegetables", "Spices"],
        instructions: "Cook rice and veggies with biryani masala.",
        image: "https://source.unsplash.com/400x300/?biryani",
      },
    ]);
  })
  .then(() => {
    console.log("Dummy recipes added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error seeding data:", err);
  });
