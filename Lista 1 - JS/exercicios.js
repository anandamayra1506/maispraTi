// LISTA DE EXERCÍCIOS 1 

// - Forneça o código fonte em um repositório Git Público como o Github (Para aqueles que já conhecem a plataforma e ferramenta)
// - Para aqueles que optam por não utilizar o Github, é necessário que o arquivo .js com as resoluções seja anexado na atividade.

// - Em ambos os casos é necessária a Inclusão instruções claras sobre como configurar e executar os exercícios localmente.

//INSTALAÇÃO DO NODE.JS

//CLONAR O PROJETO NO GITHUB

//ABRIR EM UMA IDE

//RODAR EM UM TERMINAL -> node exercicios.js

const readline = require('readline');

// Interface para leitura de entrada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

function verificaParOuImpar() {
  rl.question("Digite um número inteiro para verificar se é par ou ímpar: ", (numero) => {
    if (parseInt(numero) % 2 === 0) {
      console.log(`${numero} é par`);
    } else {
      console.log(`${numero} é ímpar`);
    }
    classificaIdade(); 
  });
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else

function classificaIdade() {
  rl.question("Digite sua idade: ", (idade) => {
    idade = parseInt(idade);
    if (idade >= 0 && idade <= 12) {
      console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
      console.log("Adolescente");
    } else if (idade >= 18 && idade <= 64) {
      console.log("Adulto");
    } else if (idade >= 65) {
      console.log("Idoso");
    } else {
      console.log("Idade inválida");
    }
    classificaNota(); 
  });
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function classificaNota() {
  rl.question("Digite sua nota (de 0 a 10): ", (nota) => {
    nota = parseFloat(nota);
    if (nota >= 6) {
      console.log("Aprovado");
    } else if (nota >= 4) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
    menuInterativo(); 
  });
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

function menuInterativo() {
  console.log("\nMenu:");
  console.log("1. Opção 1");
  console.log("2. Opção 2");
  console.log("3. Opção 3");
  rl.question("Escolha uma opção: ", (opcao) => {
    opcao = parseInt(opcao);
    switch (opcao) {
      case 1:
        console.log("Opção 1 selecionada");
        break;
      case 2:
        console.log("Opção 2 selecionada");
        break;
      case 3:
        console.log("Opção 3 selecionada");
        break;
      default:
        console.log("Opção inválida");
    }
    calculaIMC(); 
  });
}

//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

function calculaIMC() {
  rl.question("Digite seu peso (em kg): ", (peso) => {
    rl.question("Digite sua altura (em metros): ", (altura) => {
      const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
      if (imc < 18.5) {
        console.log("Baixo peso");
      } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
      } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
      } else {
        console.log("Obesidade");
      }
      classificaTriangulo(); 
    });
  });
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

function classificaTriangulo() {
  rl.question("Digite o lado A do triângulo: ", (a) => {
    rl.question("Digite o lado B do triângulo: ", (b) => {
      rl.question("Digite o lado C do triângulo: ", (c) => {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        if (a < b + c && b < a + c && c < a + b) {
          if (a === b && b === c) {
            console.log("Equilátero");
          } else if (a === b || a === c || b === c) {
            console.log("Isósceles");
          } else {
            console.log("Escaleno");
          }
        } else {
          console.log("Não forma um triângulo");
        }
        calculaValorMacas(); 
      });
    });
  });
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

function calculaValorMacas() {
  rl.question("Digite a quantidade de maçãs compradas: ", (quantidade) => {
    const preco = parseInt(quantidade) < 12 ? 0.30 : 0.25;
    console.log(`Valor total: R$ ${(quantidade * preco).toFixed(2)}`);
    ordenaValores(); 
  });
}

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

function ordenaValores() {
  rl.question("Digite o primeiro valor: ", (a) => {
    rl.question("Digite o segundo valor: ", (b) => {
      a = parseFloat(a);
      b = parseFloat(b);
      if (a > b) {
        console.log(`${b}, ${a}`);
      } else {
        console.log(`${a}, ${b}`);
      }
      contagemRegressiva(); 
    });
  });
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

function contagemRegressiva() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  exibirNumeroDezVezes(); 
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function exibirNumeroDezVezes() {
  rl.question("Digite um número para ser exibido 10 vezes: ", (numero) => {
    for (let i = 0; i < 10; i++) {
      console.log(numero);
    }
    somaCincoNumeros(); 
  });
}

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

function somaCincoNumeros() {
  let soma = 0;
  let contador = 0;
  const lerNumero = () => {
    if (contador < 5) {
      rl.question("Digite um número: ", (numero) => {
        soma += parseFloat(numero);
        contador++;
        lerNumero();
      });
    } else {
      console.log(`Soma total: ${soma}`);
      tabuada(); 
    }
  };
  lerNumero();
}

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

function tabuada() {
  rl.question("Digite um número para ver sua tabuada: ", (numero) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    calculaMedia(); 
  });
}

//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

function calculaMedia() {
  let soma = 0;
  let contador = 0;
  const lerNumero = () => {
    rl.question("Digite um número (0 para sair): ", (numero) => {
      numero = parseFloat(numero);
      if (numero !== 0) {
        soma += numero;
        contador++;
        lerNumero();
      } else {
        const media = contador > 0 ? soma / contador : 0;
        console.log(`Média aritmética: ${media}`);
        fatorial(); 
      }
    });
  };
  lerNumero();
}

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

function fatorial() {
  rl.question("Digite um número para calcular o fatorial: ", (numero) => {
    let resultado = 1;
    for (let i = parseInt(numero); i > 0; i--) {
      resultado *= i;
    }
    console.log(`Fatorial de ${numero} é ${resultado}`);
    fibonacci(); 
  });
}

//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

function fibonacci() {
  let a = 0, b = 1, temp;
  console.log(a);
  console.log(b);
  for (let i = 2; i < 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
  rl.close(); // Fecha a interface de leitura após a última interação
}

// Inicia o fluxo chamando a primeira função
verificaParOuImpar();
