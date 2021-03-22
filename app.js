const { urlencoded } = require("express");
const express = require("express");

const app = express();
let items = ["wake up"];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { KindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (item !== "") {
    items.push(item);
  }
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
