const userSchema = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const updateUser = async (req, res) => {
    try {
        const { _id } = req.body;
        if(!_id) return res.status(400).json({ message: "Bad Request" });
        const user = await userSchema.findByIdAndUpdate(_id, req.body);
        if (user) {
            const token = jwt.sign(
                {
                  _id: user._id,
                  email: user.email,
                  username: user.username,
                  gender: user.gender,
                },
                process.env.PRIVATE_KEY_TOKEN
              );
            return res.status(200).json({ message: "User Updated",
                token
             });
        }
        
    } catch (error) {
        res.status(500).json({ message: error });
    }


}





module.exports = {updateUser};