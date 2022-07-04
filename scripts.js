let video = document.getElementById("video1");

function play(){

    video.play()
}

function stop(){

    video.pause();
    video.currentTime = 0;
}

function dec(){

    video.playbackRate -= 0.1;
}

function inc(){

    video.playbackRate += 0.1;
}

function back() {

    video.currentTime -= 10;
}

function foward() {

    video.currentTime += 10;
}

/* Desafio - como esconder o controle ao tirar o mouse do video?*/