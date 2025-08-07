const verses = require('../data/verses.json');

function getVerse(req, res) {
  const { score } = req.body;

  // Escoge un versículo aleatorio de entre los 100
  const index = Math.min(Math.floor(score * (verses.length / 50)), verses.length - 1);
  const verse = verses[index];

  res.json({ verse });
}

module.exports = { getVerse };
