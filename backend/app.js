const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors'); // Importe o pacdcote cors

// Configura o middleware para lidar com dados JSON
app.use(express.json());
app.use(cors()); // Use o cors como middleware global

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para a soma de dois números
app.post('/calcular', (req, res) => {
  const { num1, num2, operacao } = req.body;
  let resultado;
  if (operacao === 'soma') {
    resultado = num1 + num2;
  } else if (operacao === 'subtracao') {
    resultado = num1 - num2;
  }
  else if (operacao === 'divisao') {
    resultado = num1 / num2;
  }
  else if (operacao === 'multiplicacao') {
    resultado = num1 * num2;
  }
  res.json({ resultado });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
