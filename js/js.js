//Funcional
function sejaBemVindo(){
  console.log("Seja BemVindo ao curso JavaScript Mestre Jedi");
}

console.log("Executando a função Seja BemVindo");
sejaBemVindo();

//POO

var objAluno = {
nome: "David",
curso: "JavaScript Mestre Jedi",

revisarAula: function(){

  console.log("Revisando a aula do curso!!!")
}
};

console.log("Objeto Aluno: ");
console.log(objAluno);

console.log("Acessando a propriedades do objeto");

console.log(objAluno.nome);
console.log(objAluno.curso);

console.log("Chamdo o método do objeto aluno: ")
objAluno.revisarAula();