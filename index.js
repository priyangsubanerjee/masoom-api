const expressssssssss = require("express");
const app = expressssssssss();
const port = 3001;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/greet/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.send("How are you " + (a + b).toString() + "?");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
