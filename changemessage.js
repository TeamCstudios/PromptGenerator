function changeMessage(){
    var randa = (Math.floor(Math.random()*lines[0].length));
    var randb = (Math.floor(Math.random()*lines[2].length));
    document.getElementById("0line").innerHTML=lines[0][randa];
    document.getElementById("1line").innerHTML=lines[1][(Math.floor(Math.random()*lines[1].length))];
    document.getElementById("2line").innerHTML=lines[2][randb];
    document.getElementById("3line").innerHTML=lines[3][(Math.floor(Math.random()*lines[3].length))];
    document.getElementById("4line").innerHTML=lines[4][(Math.floor(Math.random()*lines[4].length))];
    document.getElementById("0lineb").textContent=prompts[randa][(Math.floor(Math.random()*prompts[randa].length))];
    document.getElementById("startBttn").textContent = "Again?";
}
