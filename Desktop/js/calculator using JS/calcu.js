var screen = document.getElementById('screen');
function btnclick(value) {
    screen.value += value
}
function clearscreen() {
    screen.value = "";
}
function result() {
    var result = eval(screen.value)
    screen.value = result
}
