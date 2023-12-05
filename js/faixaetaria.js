function Faixaetaria (){
    const idade = parseFloat(document.FaixaEtaria.idade.value);
    let resultado;

    if (idade < 18) {
        resultado = ' Menor de Idade'

    }
    else if (idade < 25) {
        resultado = ' Jovem'
    }
    else if (idade < 45) {
        resultado = ' Jovem Adulto'
    }
    else if (idade < 60) {
        resultado = ' Adulto'
    }
    else {
        resultado = ' Você esta na terceira idade'
    }
        
    

    const caixaresult = document.getElementById('resultado');
    caixaresult.value = resultado;
}


