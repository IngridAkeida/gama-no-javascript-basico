let meuNome = 'Ingrid';
let meuSobrenome = 'Sanches';
let minhaProfissao = 'Estudante';
//Sem template string
console.log('Olá, meu nome é ' +meuNome+ ' ' +meuSobrenome+', atualmente eu sou ' +minhaProfissao+'.');
//com template string
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome}, atualmente eu sou ${minhaProfissao}.`);

// Operadores ternários 

let isValid = true; 

//sem ternário

function verify(isValid){
    if(isValid) /*Ela já informa que se é true automaticamente, caso contrário seria necessário ultilizar !isValid, por exemplo, assim ele informaria que é diferente de true, ou seja, false.*/{
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));

//com ternário

const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero > 0 ? 0 : -1;

console.log(numeroResultado);

// sem Arrow function


function soma(x,y){

    return x + y;
};

//console.log(soma(6,2));


     //Constantes nao podem ser alteradas
const multiplicacao = function(x,y){
    return x * y;
};

//console.log(multiplicacao(6,2));


// com Arrow function

const dividir = /*ele substitui a funtion nesse ponto*/(x, y) => {
    return x / y;
};

console.log(dividir(6,2));

// Quando você passar um objeto na arrow function é necessário o (), para processar a informacao

const objeto = () => ({
    nome:'Ingrid',
    sobrenome:'Sanches'
});

// extra 

const nomes = (nome, sobrenome) => {
  return `Olá, meu nome é ${nome} ${sobrenome}.`
};

console.log(nomes('Ingrid', 'Sanches'));


// Listas (incluir valores a lista forma mais longa) - uso do spread (...variavel)

let list = [1, 2, 5];
let addList = [3, 4];

for(let i = 0; i < addList.length; i++){
   for (let j = 0; j < list.length; j++){
       if(list[j] >= addList[i]){
           list.splice( j, 0, addList[i]);
           j++;
       }
   } 
}

console.log(list);

// Listas (incluir valores a lista forma mais curta) - uso do spread (...variavel)

const listResult = [1, 2, ...addList, 5];

console.log(listResult);


// Adicao de novo elemento - uso do spread (...variavel)

let secundary = ['A', 'B', 'C'];
let principal = [...secundary];

principal.push('D'); // somente o principal recebe o 'D'

console.log(`Este é o exemplo principal: ${principal}`);
console.log(`Este é o exemplo secundário: ${secundary}`);





