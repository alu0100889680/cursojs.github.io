//var teclas = document.querySelectorAll(".teclas",".negra");
var sonidos = ['https://manzdev.github.io/piano-keys/c1.mp3?', 'https://manzdev.github.io/piano-keys/c1s.mp3?',
'https://manzdev.github.io/piano-keys/d1.mp3?', 'https://manzdev.github.io/piano-keys/d1s.mp3?', 'https://manzdev.github.io/piano-keys/e1.mp3?'
, 'https://manzdev.github.io/piano-keys/f1.mp3?', 'https://manzdev.github.io/piano-keys/f1s.mp3?',
'https://manzdev.github.io/piano-keys/g1.mp3?', 'https://manzdev.github.io/piano-keys/g1s.mp3?',
'https://manzdev.github.io/piano-keys/a1.mp3?', 'https://manzdev.github.io/piano-keys/a1s.mp3?', 'https://manzdev.github.io/piano-keys/b1.mp3?',
'https://manzdev.github.io/piano-keys/c21.mp3?'];


function reproducir(id){
    var array = sonidos.map(e => e.indexOf(id + ".mp3"));
    var aux = array.indexOf(37);
    var audio = new Audio(sonidos[aux]);
    audio.play();
}
