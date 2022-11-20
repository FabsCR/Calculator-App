// Function to add parameter value
function numeros(valor){
    document.getElementById('result').value += valor; 
}

// Function to evaluate the operation
function operacion(){
    var opera = document.getElementById('result').value;
    if(opera == 0){
        document.getElementById('result').value = "No operation"
    } else{
        document.getElementById('result').value = eval(opera);
    }
}

// Function to reset the screen of the calculator
function reset(){
    document.getElementById('result').value = " ";
}