const prompt = require("prompt-sync")();

let fat, num;

for(i = 1; i <= 10; i += 2){
    fat = 1
    for(num = i; num >= 1; num--){
      fat *= num;
    }
    console.log("o fatorial de %d", i, fat);
}