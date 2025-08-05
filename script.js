document.getElementById("play").addEventListener("click", function() {
    <audio id="lagu" src="lagu/lagu.mp3"></audio>
<button id="play">Play</button>
("lagu");
    if (lagu.paused) {
        lagu.play();
        this.innerHTML = "Pause";
    } else {
        lagu.pause();
        this.innerHTML = "Play";
    }
});