function media() {
    const nota1 = parseFloat(document.formMedia.nota1.value);
    const nota2 = parseFloat(document.formMedia.nota2.value);
    
    let situacao;

     let calculo = parseFloat((nota1 + nota2) / 2);

    if (calculo < 5) {
        situacao = 'Reprovado';
    }
    else {
        situacao = 'Aprovado';
    }

    let media = document.querySelector('.pmedia');
    media.innerHTML = calculo;

    let situ = document.querySelector('.psitu');
    situ.innerHTML = situacao;

}
