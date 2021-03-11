const express = require("express");
const ModelEx = require("../src/models/dataRecord");
require("../src/db/conn");
const mongoData = require("../src/models/dataRecord");
const app = express();
const port = 4000;

app.use(express.json());

//GET all data

app.get("/users", async (req, res) => {
  try {
    const getData = await mongoData.find();
    res.send(getData);
  } catch (e) {
    res.send(e);
  }
});

//Get data by id

app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleData = await mongoData.findById(_id);

    if (!getSingleData) {
      return res.status(404).send();
    } else {
      res.send(getSingleData);
    }
  } catch (e) {
    res.send(e);
  }
});

// app.post("/users", (req, res) => {
//   res.send("hello from server");
//   console.log(req.body);
//   const allData = new mongoData(req.body);
//   allData.save().then(() => {
//       res.status(201).send(user);
//   }).catch((e) => {
//       res.status(400).send(e);
//   })
// });

//POST

app.post("/users", async (req, res) => {
  try {
    const allData = new mongoData(req.body);
    const result = await allData.save();
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

//PUT METHOD or update

app.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await mongoData.findByIdAndUpdate(_id, req.body);
    res.send(updateData);
  } catch (e) {
    res.status(400).send(updateData);
  }
});

//Delete

app.delete("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id)
    await mongoData.deleteOne({_id:id});
    res.send("Delerted")
    // if (!req.params.id) {
    //   return res.status(400).send();
    // }
    // res.send(deleteData);
  } catch (e) {
    return status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection established at ${port} port`);
});
