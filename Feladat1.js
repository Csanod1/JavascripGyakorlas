let array = [];
for (let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
}
array.sort(function(a, b){return a - b});

for (let i = 0; i < 10; i++){
    console.log(array[i]);
}

