const colors = [
    "red",
    "green",
    "blue",
    "yellow"
]


function pickRandomColor(e){
    // setInterval(function() {
        const randomNumber = Math.floor(Math.random() * colors.length);
        e.target.style.borderColor = colors[randomNumber]
        
    // }, 10);

}


function removeRandomColor(){
    const lines = document.getElementsByClassName('lines')
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.borderColor = 'black'
    }
    
}