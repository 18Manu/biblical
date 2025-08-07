const express = require('express');
const router = express.Router();
const { getVerse } = require('../controllers/quizController');

// 👇 Esta es la ruta que estás intentando usar
router.post('/verse', getVerse);

module.exports = router;
