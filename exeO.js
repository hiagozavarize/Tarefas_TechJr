const prompt = require("prompt-sync")();

let fat = 1, num;

for(i = 1; i <= 10; i++){
    if(i % 2 != 0){
        for(num = i; num >= 1; num--){
          fat *= num;
        }
        console.log("o fatorial de %d", i, fat);
    }else{
        continue;
    }
}