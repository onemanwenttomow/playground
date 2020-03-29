var text = document.querySelector('.text');
var number = document.querySelectorAll('.text')[1];
var card = document.getElementById('card');
// var pack = document.getElementById('pack');

card.addEventListener('click', function() {
    card.classList.add('flipcard');
});

console.log('text: ',text);
function toggleFade() {
    console.log("changing text");
    setTimeout(function(){
        text.classList.remove('fadein');
        text.classList.add('fadeout');
        setTimeout(function(){
            text.classList.remove('fadeout');
            if (text.innerHTML === "Number of muffins: ") {
                text.innerHTML = "Number of puffins: ";
                number.innerHTML = 100;
            } else {
                text.innerHTML = "Number of muffins: ";
                number.innerHTML = 55;
            }
            text.classList.add('fadein');
        },400);
        toggleFade();
    }, 2000);
}
toggleFade();

