let macskak = [];
for (let i = 1; i <= 20; i++){
    let rnd = Math.floor(Math.random()*10) + 2;
    let macska = {nev: "cirmos " + i, eletkor: rnd}
    macskak.push(macska);
    if(rnd == 2){
        console.log("Név: " + macska.nev + " Életkor: " + macska.eletkor);       
    }
}    
