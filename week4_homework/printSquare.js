
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
