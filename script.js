console.log('Javascript laralara');

function validaCPF(cpf){
    return true;
}


function validacao(){
    console.log('Iniciando validacao de cpf');


    var cpf = document.getElementById('cpf_digitado').value;

    var resultadovalidacao = validaCPF(cpf);

    if(resultadovalidacao){
        document.getElementById('success').style.display = 'block';
    }

    console.log(cpf);
}