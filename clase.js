function bebidas() {
  const cafe = 45;
  const te = 35;
  const leche = 25;
  const malteada = 65;
  const jugo = 25;
  var x = document.getElementById('numero').value;
  const bebida = document.getElementsByTagName('li');
  var elegida = x - 1;
  var i = document.getElementById('cantidad').value;




  if (elegida == 0) {
    document.getElementById('resultado').innerHTML = "Café: $" + cafe * cantidad;
  } else if (elegida == 1) {
    document.getElementById('resultado').innerHTML = "Té: $"+ te * cantidad;
  } else if (elegida == 2) {
    document.getElementById('resultado').innerHTML = "Leche: $"+ leche * cantidad;
  } else if (elegida == 3) {
    document.getElementById('resultado').innerHTML = "Malteada: $"+ malteada * cantidad;
  } else if (elegida == 4) {
    document.getElementById('resultado').innerHTML = "Jugo: $"+ jugo * cantidad;
  } else {
    document.getElementById('resultado').innerHTML = "No selecciono ninguna bebida";
    document.getElementById('resultado').innerHTML = elegida;
  }
}















