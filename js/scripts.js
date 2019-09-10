// Onload fade for the button
$(document).ready(function () {
    $(".buttonLarge").fadeIn(1500)
})




// Calling quotes from an API
$.getJSON('https://api.quotable.io/random', function (data) {
    console.log(`${data.content} —${data.author}`)
    document.getElementById('quote').innerHTML = data.content + '<br>' + data.author
})







