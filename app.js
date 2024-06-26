const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require('cors');
const connect = require("./dataBase/connectToDB");
const User = require("./models/userSchema");
const authRoute = require("./Routes/authRoute");
const postRoute = require("./Routes/postRoute");
const userRoute = require("./Routes/userRoute");


const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());


app.use("/users", authRoute);

app.use("/post",postRoute)

app.use("/user",userRoute)




// app.get("/user", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (eror) {
//     console.log(eror);
//     res.status(500).json({
//       message: "Internal Server Error",
//     });
//   }
// });
app.get("/test", (req, res) => {
  res.json({
    message: "Hello",
  });
});

//cors to can access atals database link
app.get("/test", (req, res) => {
  res.json({
    message: "Hello",
  });
});



connect();
app.listen(PORT, () => {
  console.log(PORT, "server is running..");
});
