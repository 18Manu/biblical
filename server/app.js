const express = require('express');
const cors = require('cors');

const app = express();

// 🔥 Middleware obligatorio
app.use(cors());
app.use(express.json());

// 🔄 Importa y usa las rutas
const quizRoutes = require('./routes/quizRoutes');
app.use('/api', quizRoutes); // <- Esto es clave

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
