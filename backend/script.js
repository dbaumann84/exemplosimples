const form = document.getElementById('soma-form');
const resultadoSpan = document.getElementById('resultado');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const num1 = parseFloat(form.num1.value);
  const num2 = parseFloat(form.num2.value);

  const response = await fetch('/soma', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ num1, num2 })
  });

  const data = await response.json();
  resultadoSpan.textContent = data.resultado;
});