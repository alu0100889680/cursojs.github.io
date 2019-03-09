// var partido => (){
//   var resa = parseInt(Math.random() * 15);
//   console.log(resa);
// }

class Equipo {
    constructor(nombre){
        this.nombre = nombre;
        this.score = 0;
    }
    suma(resultado){
        this.score += resultado; 
    }
}

const carga = () => {

    var nombres = ["A","B","C","D","E","F","G","H","I"];
    var equipos = [];

    nombres.forEach(function(i){
        var aux = new Equipo(nombres[i]);
        console.log(nombres[i])
        equipos.push(aux);
    })

    console.log(equipos)
} 



const partido = () => {
  var eq1 = equipos[parseInt(Math.random()*equipos.length)].nombre
  do{
    var eq2 = equipos[parseInt(Math.random()*equipos.length)].nombre
  }while(eq1 == eq2);

  var resa = resultado_aleatorio();
  var resb = resultado_aleatorio();
  console.log(resa);
  
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

    console.log("------")
    console.log(`a ${a}`)
    console.log(`Hola ${resultado}`)
    return resultado;
}