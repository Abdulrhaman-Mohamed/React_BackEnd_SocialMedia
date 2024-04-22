const { getPostById, addPost, getPosts, updatePost, deletelPost, getPostsById } = require("../controllers/postController");

const router = require("express").Router();


router.route("").get(getPosts)
router.route("/userposts").get(getPostsById)
router.route("/:id").get(getPostById);
router.route("/").post(addPost);
router.route("/:id").put(updatePost)
router.route("/:id").delete(deletelPost)


module.exports = router;