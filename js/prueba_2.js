var element="";
var inputValue="0";
operator="";
newResult=0
$(function () {
    
    $(".n").click(function(e){
        
        var numberValue=e.target.value
        
        inputValue=inputValue+numberValue;
        $("#painter").val(inputValue)
        
    })

    
    $(".o").click(function(e){
        
        inputValue=parseInt(inputValue)
        switch(operator){
            case "sum":
                newResult=newResult+inputValue
            break; 
            case "rest":
                newResult=newResult-inputValue
            break; 
            case "multiply": // change this value
            newResult=newResult*inputValue
            break; 
            case "divide":
                newResult=newResult/inputValue
            break; 
            case "=":
                $("#paintNewresult").text(" resultado: " +newResult)
                inputValue="0"
                operator=""
                $("#painter").val("")
                break;
            default:
                newResult=inputValue;
                alert(newResult)
                // deternme the speps to run this way                
                break;

        }
          // resultado de la operacion segun el poeradpre asignado
        
         // Se hace igual a 0 en cada iteracion
        
        operator=e.target.value;
        $("#paintNewresult").text(" resultado: " +newResult)
        // var newResult=0 
        inputValue="0"
        // se registra el onclik del nuevo operador seleccionado 
        // valuidaciones:
            // 1. Se evalua el ultimo datos ingresado
            // 2. Se evalua la operacion ultima ingresada
            //3. Se evalua el ultimo resultado ingresado
           
        
        })


    // $(".n").click(setVariables)
    
    // function setVariables(e){
    //     // element=element+"1"
    //     // alert(element)
    // selectedElement=e.target.value;
   
    // element=element+selectedElement;
    
    //     $("#painter").val(element)
        
    // }
    // $(".o").click(function(){
    //     $("#painter").val('')
    //     element="";
    // })
    // $("#send").click(calcule)
    // function calcule(){
        
    //     switch(){

    //     }
    // }
})
