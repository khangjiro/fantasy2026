const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.get("/fpl/*", async (req, res) => {
  const url = "https://fantasy.premierleague.com/" + req.params[0];
  const response = await fetch(url);
  const data = await response.text();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data);
});
app.listen(process.env.PORT || 3000, () => console.log("Proxy running"));
