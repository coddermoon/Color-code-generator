
function color() {
    
    randomColorCodeGenarate()
   
   
}

function randomColorCodeGenarate() {
    const colorNumbers = 16777216;
    const randomColor = Math.floor(Math.random()* colorNumbers)
    const hexColor =  '#'+randomColor.toString(16);
    document.body.style.backgroundColor=hexColor;
  document.getElementById('code').value = hexColor.toUpperCase()
 // to copy this hsx code
   document.getElementById('copy').addEventListener('click',()=>{
    window.navigator.clipboard.writeText(hexColor.toUpperCase())

    genarateToastMassage(`${hexColor.toUpperCase()} copied`)
        })
        
}


// generate a toast massage

function genarateToastMassage(msg) {
    const div = document.createElement('div');
   
    div.className = 'toast-message toast-message-slide-in';
   
    div.innerText = msg;
    document.body.appendChild(div)

    div.addEventListener('click',()=>{
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');
        
// remove 

div.addEventListener('animationend',()=>{
    div.remove();
   
})

    })
   
}
   

// click handler on div;


  
    


