function calcular() {
    // Obtém os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
  
    // Constrói a solicitação fetch para enviar os dados para o servidor
    fetch('http://localhost:3000/calcular', {
      method: 'POST', // Usa o método HTTP POST para enviar os dados
      headers: {
        'Content-Type': 'application/json', // Define o cabeçalho de conteúdo JSON
      },
      body: JSON.stringify({ num1, num2, operacao }), // Converte os dados em formato JSON
    })
      .then((response) => response.json()) // Analisa a resposta JSON
      .then((data) => {
        // Atualiza o elemento HTML com o resultado retornado pelo servidor
        document.getElementById('resultado').textContent = data.resultado;
      })
      .catch((error) => {
        console.error('Ocorreu um erro:', error);
      });
  }
  