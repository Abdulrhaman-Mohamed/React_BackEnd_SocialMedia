const { getPostById, addPost, getPosts, updatePost } = require("../controllers/postController");

const router = require("express").Router();


router.route("").get(getPosts)
router.route("/:id").get(getPostById);
router.route("/").post(addPost);
router.route("/:id").put(updatePost)

module.exports = router;