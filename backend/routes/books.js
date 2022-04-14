const router = require("express").Router();
let Book = require("../models/book.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const genre = req.body.genre;
  const image = req.body.image;
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const date = Date.parse(req.body.date);

  const newBook = new Book({
    username,
    genre,
    image,
    title,
    author,
    content,
    date,
  });

  newBook
    .save()
    .then(() => {
      res.json("Book add!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Book deleted !");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/update/:id").post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.username = req.body.username;
      book.genre = req.body.genre;
      book.image = req.body.image;
      book.title = req.body.title;
      book.author = req.body.author;
      book.content = req.body.content;
      book.date = Date(req.body.date);

      book
        .save()
        .then(() => res.json("Book updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});
module.exports = router;
