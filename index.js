const express = require("express");
const axios = require('axios')

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/name", (req, res) => {
  const args = process.argv.slice(2);
  let name= args[0];
  let url = `https://api.nationalize.io?name=${name}`;
  axios.get(url).then((response) => {
    let data = response.data.country;
    res.send(data);
  });

});

app.listen(2000, () => console.log("Server started"));