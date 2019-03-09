
function gen(){
  var numero = parseInt((Math.random()*6)+1);
  var dado = document.getElementById('dado');
  dado.innerHTML = numero;
}

