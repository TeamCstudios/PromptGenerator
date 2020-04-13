function changeMessage(){
    for(var i=0; i<5; i++){
        document.getElementById(i+"line").innerHTML=lines[i][(Math.floor(Math.random()*lines[i].length))];
    }
    document.getElementById("startBttn").textContent = "Again?";
}
