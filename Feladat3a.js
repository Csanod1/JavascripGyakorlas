let number = 0;
setInterval(function(){
    
    console.log(number + ";");

    document.getElementById("sor2").innerHTML += number+";";
    number++;
}, 2000)