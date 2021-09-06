// Your code goes here
document.addEventListener('DOMContentLoaded', function (){
    changeText('This is really cool!')
});


function changeText(text) {
    let p = document.querySelector('#text');
    p.textContent = text;
}
