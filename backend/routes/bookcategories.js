const router = require("express").Router();
let BookCategory = require("../models/bookcategory.model");

router.route("/").get((req, res) => {
  BookCategory.find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/add").post((req, res) => {
  const idgenre = req.body.idgenre;
  const genre = req.body.genre;
  const newBookCategory = new BookCategory({
    idgenre,
    genre,
  });

  newBookCategory
    .save()
    .then(() => {
      res.json("Category add!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").get((req, res) => {
  BookCategory.findById(req.params.id)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").delete((req, res) => {
  BookCategory.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Category deleted !");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/update/:id").post((req, res) => {
  BookCategory.findById(req.params.id)
    .then((category) => {
      category.idgenre = req.body.idgenre;
      category.genre = req.body.genre;
      category
        .save()
        .then(() => res.json("Category updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});
module.exports = router;
