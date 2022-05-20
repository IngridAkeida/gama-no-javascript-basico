//--------------------------Tamplate String ---------------------------------


let meuNome = 'Ingrid';
let meuSobrenome = 'Sanches';
let minhaProfissao = 'Estudante';
//Sem template string
console.log('Olá, meu nome é ' +meuNome+ ' ' +meuSobrenome+', atualmente eu sou ' +minhaProfissao+'.');
//com template string
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome}, atualmente eu sou ${minhaProfissao}.`);

// -----------------------Operadores ternários------------------------------

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

//-----------------------------------Arrow function-----------------------------

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

//-------------------------------- Operador spread -----------------------------

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

//------------------------------Desestruct------------------------------------

const pessoa = {
    newName: 'Ingrid',
    newLastName: 'Sanches',
    newAge: 29,
    newProfession: 'Student'
};

console.log(pessoa);

// Se a informacao vinher de um API e precisar ser mais destrinchada, uma forma é chamar o objeto dessa forma

let name1 = pessoa.newName;
let lastName = pessoa.newLastName;
let age = pessoa.newAge;
let profession = pessoa.newProfession;

console.log(name1, lastName, age, profession);

//ou usando desestruct

let{newName, newLastName, newAge, newProfession} = pessoa;

console.log(newName, newLastName, newAge, newProfession);

//Obs: Se você colocar um objeto que não exista ela vai apresentar undefined na informacao que você não tem e retornar a informacao das demais 


//------------------------------Match------------------------------------
let CPF = '123.456.789-00';
const meuCPF = `Meu CPF é: ${CPF}.`;

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(meuCPF.match(regex));

const meuCPF2 = `Meu CPF é: 123.456.789-00.`;

const regex2 = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(meuCPF2.match(regex2));



//-----------------------------Single page aplication ---------------------

// React
// Angula
// Vue.js











