const mongoose = require("mongoose");
const data = require("../db.json");
const User = require("../models/user");
const Category = require("../models/category");
const Product = require("../models/product");
const Wishlist = require("../models/wishlist");

mongoose.connect(
  "mongodb+srv://ibrahim:admin123@cluster0.loyah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

async function seedDatabase() {
  try {
    await User.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Wishlist.deleteMany({});

    await User.insertMany(data.users);
    await Category.insertMany(data.categories);
    await Product.insertMany(data.products);
    await Wishlist.insertMany(data.wishlist);

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
