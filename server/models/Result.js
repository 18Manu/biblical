// Result.js - Simulación sin base de datos

class Result {
  constructor(score, verse) {
    this.timestamp = new Date();
    this.score = score;
    this.verse = verse;
  }
}

module.exports = Result;
