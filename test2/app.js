let homeBtn = document.getElementById('home-btn')
let upBtn = document.getElementById('up-btn')
let downBtn = document.getElementById('down-btn')

homeBtn.addEventListener('click', backToTop)
upBtn.addEventListener('click', up)
downBtn.addEventListener('click', down)

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function down() {
    document.body.scrollTop += 400;
    document.documentElement.scrollTop += 400;
}
function up() {
    document.body.scrollTop -= 400;
    document.documentElement.scrollTop -= 400;
}