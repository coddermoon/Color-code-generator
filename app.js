
function color() {
    
    randomColorCodeGenarate()
}

function randomColorCodeGenarate() {
    const colorNumbers = 16777216;
    const randomColor = Math.floor(Math.random()* colorNumbers)
    const hexColor =  '#'+randomColor.toString(16);
    document.body.style.backgroundColor=hexColor;
    document.getElementById('code').value = hexColor.toUpperCase()
}