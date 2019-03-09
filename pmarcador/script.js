// var partido => (){
//   var resa = parseInt(Math.random() * 15);
//   console.log(resa);
// }

var equipos = ["A","B","C","D","E","F","G","H","I"];

var partido = () => {
  var eq1 = equipos[parseInt(Math.random()*equipos.length)]
  do{
    var eq2 = equipos[parseInt(Math.random()*equipos.length)] 
  }while(eq1 == eq2);

  console.log(eq1);
  var resa = resultado_aleatorio();
  var resb = resultado_aleatorio();

  
  var equipoA = document.getElementById('e1');
  var equipoB = document.getElementById('e2');
  var huecoA = document.getElementById('a');
  var huecoB = document.getElementById('b');
  equipoA.innerHTML = eq1;
  equipoB.innerHTML= eq2;
  huecoA.innerHTML = resa;
  huecoB.innerHTML = resb;
  
}

const resultado_aleatorio = () => {
    var a = parseInt(Math.random()*100);

    if((a >= 0) && (a<=5))
        var resultado = parseInt((Math.random()*15)+11);
    else if((a > 5) && (a<=20)) 
        var resultado = parseInt((Math.random()*10)+7);
    else if((a > 20 && a<=100))
        var resultado = parseInt(Math.random()*6);

    return resultado;
}