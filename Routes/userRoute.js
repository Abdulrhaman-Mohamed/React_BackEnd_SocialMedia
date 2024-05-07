const { updateUser } = require("../controllers/userController");

const router = require("express").Router();


router.route("").put(updateUser);




module.exports = router;