//console.log('Javascript laralara');

function validaCPF(cpf){

    console.log(cpf.length)

    if(cpf.length !=11){
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        // console.log('numeros do cpf' +numeros);
        
        // console.log('digitos do cpf' +digitos);

        var soma = 0;
        for (var i = 10; i>1; i--){
            soma+= numeros.charAt(10-i)*i;     
        }
        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);



    return true;

    }
}


function validacao(){
    //console.log('Iniciando validacao de cpf');


    var cpf = document.getElementById('cpf_digitado').value;

    var resultadovalidacao = validaCPF(cpf);

    if(resultadovalidacao){
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }

    console.log(cpf);
}