const router = require("express").Router();
const fs = require("fs");
router.get("/notes", async (req, res) => {
  const existingNotes = await fs.readFileSync("db/db.json", "utf8");

  res.json(JSON.parse(existingNotes));
});
router.post("/notes", async (req, res) => {
  const { title, text } = req.body;
  const existingNotes = await fs.readFileSync("db/db.json", "utf8");
  const parsedNotes = JSON.parse(existingNotes);
  parsedNotes.push({ title, text });
  console.log(parsedNotes);
  await fs.writeFileSync("db/db.json", JSON.stringify(parsedNotes));
  res.json({ message: "noteWrittenSuccessfully" });
});

module.exports = router;
