function operar() {
    var result="No se selecciono nada"
var number_1=parseInt(document.getElementById("number_1").value)
var number_2=parseInt(document.getElementById("number_2").value)
var option=document.getElementById("operators").value;
switch(option){
    case "Sum":
    operationR=number_1+ number_2;
    break;
    case "Rest":
    operationR=number_1 - number_2;
    break;
    case "Product":
    operationR=number_1 *number_2;
    break;
    case "Divide":
    operationR=number_1/ number_2;
    break;

}
    document.getElementById("paintResult").innerHTML=operationR;
    // alert(operators.value);


}
