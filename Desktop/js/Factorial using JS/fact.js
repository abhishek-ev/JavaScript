function factorial(){
    var n=document.getElementById("num").value;

var fact = 1;
var i;
//if (number == 0) {
//    console.log(`the factorial of ${number} is 1`);
//} else if (number < 0) {
  //  console.log(`the factorial of -ve number is not possible`);
//}*/
//else {
    
        for (var i = 1; i <= number; i++)
        fact = fact * i;
        document.getElementById("fact").innerHTML = fact;
    
    
}