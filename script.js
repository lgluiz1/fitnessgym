const resultado = document.getElementById("resposta");
const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function() {
  const valorPeso = document.getElementById("peso").value;
  const alturaValor = document.getElementById("altura").value;

  // Verificar se a altura é maior que zero
  if (alturaValor > 0) {
    const alturaMetros = alturaValor / 100;
    const imc = valorPeso / (alturaMetros * alturaMetros);
    resultado.textContent = "Seu IMC é " + imc.toFixed(2);
  } else {
    resultado.textContent = "A altura deve ser maior que zero!";
  }
});


