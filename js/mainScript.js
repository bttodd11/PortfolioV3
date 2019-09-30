
var i = 0;
var txt = 'About Me' ;
var speed = 70;

function typeWriter(){
    if ( i < txt.length){
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

    




