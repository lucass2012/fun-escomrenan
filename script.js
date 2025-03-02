//Exercício 1

//Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição.

const frase1 = "albion online RPG";
const frase2 = "irei estudar até as 01:30 da manhã";
const frase3 = "o renan adora jogar league of legends";

function replaceWord(phrase, oldWord, newWord) {
  const replacedPhrase = phrase.replaceAll(oldWord, newWord);
  const firstLetter = replacedPhrase.charAt(0);

  return replacedPhrase.replace(firstLetter, firstLetter.toUpperCase());
}

console.log(replaceWord(frase3, "league of legends", "minecratf"));
console.log(replaceWord(frase2, "01:30", "02:00"));

function numeroPorPalavra(arroz, feijao) {
  const soma = arroz + feijao;

  if (soma >= 0) {
    return "lucas";
  } else {
    return "andressa";
  }
}

const x = numeroPorPalavra(-23, 3);
const y = numeroPorPalavra(3, 3);

function substituirValores(valor1, valor2) {
  const troca1 = x + valor1;
  const troca2 = y + valor2;

  if (troca1 === "andressas" && troca2 === "lucasa") {
    return "Andressa é legal e o Lucas também é legal";
  } else if (troca1 === "andressas" && troca2 !== "lucasa") {
    return "Andressa é legal e o Lucas não é legal";
  } else if (troca1 !== "andressas" && troca2 === "lucasa") {
    return "Andressa não é legal e o Lucas é legal";
  } else if (troca1 !== "andressas" && troca2 !== "lucasa") {
    return "Os dois não são legais";
  }
}

function pessoaÉLegal(nomePessoa, tomaEnergetico) {
  if (tomaEnergetico) {
    console.log(`${nomePessoa} é legal ;)`);
  } else {
    console.log(`${nomePessoa} é chata :/`);
  }
}

pessoaÉLegal("Lucas", true);

console.log(substituirValores("s", "a"));

console.log(numeroPorPalavra(-12, 3));

console.log(replaceWord(frase1, "albion", y));

//Exercício 2

//Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.

function calculaMedia(nota1, nota2, nota3) {
  const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

  return `A média do aluno é ${media}`;
}

console.log(calculaMedia(3, 3, 4));

//A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é <media>."

/* Exercício 3

Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade, que representam o valor unitário de um produto e a quantidade comprada, respectivamente. A função deve calcular o valor total da compra, aplicando um desconto progressivo no valor unitário e formatando o resultado com duas casas decimais. */

/* O desconto será aplicado de acordo com a quantidade comprada:

10% de desconto se a quantidade comprada for maior ou igual a 5;
20% de desconto se a quantidade comprada for maior ou igual a 10.
Em seguida, a função deve substituir o ponto por vírgula na string do valor total, e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>." */

function valorTotal(valorUnitario, quantidade) {
  let valorTotal = 0;

  if (quantidade >= 10) {
    valorTotal = quantidade * valorUnitario * 0.8;
  } else if (quantidade >= 5) {
    valorTotal = quantidade * valorUnitario * 0.9;
  } else {
    valorTotal = (quantidade*valorUnitario);
  }
 
  return `O valor total da compra é ${valorTotal.toFixed(2)}`;
}

console.log(valorTotal(10,15))