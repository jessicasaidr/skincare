const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'RITUAL-pacote/projeto-skincare/app-skincare.html'));
});

app.get('/relatorio', (req, res) => {
  res.sendFile(path.join(__dirname, 'RITUAL-pacote/projeto-skincare/relatorio-print.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
