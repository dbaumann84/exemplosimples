function calcular() {
   
     const num1 = parseFloat(document.getElementById('num1').value);
     const num2 = parseFloat(document.getElementById('num2').value);


     fetch('http://localhost:3000/soma', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({ num1, num2 }),
     })
         .then((response) => response.json())
         .then((data) => {
             document.getElementById('resultado').textContent = data.resultado;
         })
         .catch((error) => {
             console.error('Ocorreu um erro:', error);
         });
        
 }