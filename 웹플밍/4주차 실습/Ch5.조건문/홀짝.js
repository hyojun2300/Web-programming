const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,  
});

rl.question("점수를 입력하세요 : ", function(num){
    num=num%2;
    if(num) {
        console.log('홀수');
    }
    else {
        console.log('짝수');
    }
    rl.close();
})