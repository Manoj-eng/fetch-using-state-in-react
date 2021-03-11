const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mongoEx", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect ion successfull"))
  .catch((err) => console.log(err));

 