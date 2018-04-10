const router = require("express").Router();
const db = require("../../models");
// const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  // .get(booksController.findAll)
  .post(function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
