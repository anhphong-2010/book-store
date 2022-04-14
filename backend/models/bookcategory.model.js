const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookCategorySchema = new Schema(
  {
    idgenre: { type: String, required: true },
    genre: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BookCategory = mongoose.model("BookCategory", bookCategorySchema);
module.exports = BookCategory;
