
var i = 0;
var txt = 'My name is Brian Todd(aka B.Todd), I am a software developer from Austin,TX. I\'ve built  websites, web applications and also software. I enjoy learning' +
' new technologies and also finding solutions to complex problems'
var speed = 15;

function typeWriter(){
    if ( i < txt.length){
        document.getElementById("descriptionMain").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

    




