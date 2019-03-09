var songs = ["https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
                 "https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3",
                 "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3",
                 "https://scummbar.com/mi2/MI1-CD/04%20-%20LeChuck's%20Theme.mp3"
                ];
var currentSong = 0;

var audio = document.getElementById('song');
var lcd = document.getElementById('lcd');
var playpause = document.getElementById('playpause');
audio.src = songs[0];

var reproducir = () => {
    audio.play();
    mostrar();
}

var pausar = () => {
    audio.pause();
}

var siguiente = () => {
    currentSong++;
    if(currentSong == songs.length)
        currentSong = 0;
    audio.src = songs[currentSong];
    reproducir();  
}
var mostrar = () => {
    var filename = songs[currentSong].substring(songs[currentSong].lastIndexOf('/')+1);
    filename = filename.replace(/%20/g,' ');
    filename = filename.substring(0, filename.lastIndexOf('.'));

    lcd.textContent = filename;
    lcd.textContent +=  "\n\n\n\n" + Math.round(audio.currentTime);
}
