const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aime:mongoKulumbila123@lasataie1.ywjbqb1.mongodb.net/r18jwt?retryWrites=true&w=majority&appName=Lasataie1"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();
app.use(express.static(`${__dirname}/../CLIENT/dist`));

app.listen(3000);
