//var teclas = document.querySelectorAll(".teclas",".negra");
var sonidos = ['https://manzdev.github.io/piano-keys/c1.mp3?', 'https://manzdev.github.io/piano-keys/c1s.mp3?',
'https://manzdev.github.io/piano-keys/d1.mp3?', 'https://manzdev.github.io/piano-keys/d1s.mp3?', 'https://manzdev.github.io/piano-keys/e1.mp3?'
, 'https://manzdev.github.io/piano-keys/f1.mp3?', 'https://manzdev.github.io/piano-keys/f1s.mp3?',
'https://manzdev.github.io/piano-keys/g1.mp3?', 'https://manzdev.github.io/piano-keys/g1s.mp3?',
'https://manzdev.github.io/piano-keys/a1.mp3?', 'https://manzdev.github.io/piano-keys/a1s.mp3?', 'https://manzdev.github.io/piano-keys/b1.mp3?',
'https://manzdev.github.io/piano-keys/c21.mp3?'];

function reproducir(id){
    console.log(id);
    var sonido = sonidos.map(e => e.indexOf(id + ".mp3"))
    console.log(sonido);
    var audio = new Audio(sonido);
    audio.play();
    console.log()
}

//console.log(teclas);