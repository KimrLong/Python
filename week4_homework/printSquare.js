
printSquare(5);

function printSquare(NumSize) {
    var SqResult="";
    for (i=0; i< NumSize; i++) {    
        for (j=0; j<NumSize; j++) {
        SqResult += "*";      
        }
        console.log(SqResult);
        SqResult = "";
    } 
}


function printSquare(n) {
    let i = n;
    while (i>0) {
        console.log("*".repeat(n));
        i--;
    }
}

printSquare(10);