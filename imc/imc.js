function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.value;

    var calculo = (peso/(altura*altura));

    if(calculo<18.5){
        alert("Você está magro com o índice: " + calculo);   
    }
    else if(calculo>=18.5 && calculo<24.9){
        alert("Você está normal com esse índice: " + calculo);
    }
    else if(calculo>=25 && calculo<29.9){
        alert("Você está normal com esse índice: " + calculo);
    }
    else if(calculo>=30 && calculo<34.9){
        alert("Você está normal com esse índice: " + calculo);
    }
    else if(calculo>40){
        alert("Você está normal com esse índice: " + calculo);
    }
}