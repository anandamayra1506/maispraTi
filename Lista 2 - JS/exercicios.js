// INSTALAR O NODE NO PC ATRAVÉS DO LINK https://nodejs.org/en/download/package-manager
// node -v -> verificar versão do node ou se tem instalado
// node + nome do arquivo -> node exercicios.js

//Manipulação de Objetos
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: 'Volkswagen',
    modelo: 'Nivus',
    ano: 2024,
    cor: 'Preto'
};

for (let prop in carro) {
    console.log(`${prop}: ${carro[prop]}`);
}

//2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


let livro = {
    titulo: 'O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios',
    autor: 'Charles Duhigg',
    anoPublicacao: 2012,
    genero: 'Mudança Organizacional'
};

let hasEditora = false;
for (let prop in livro) {
    if (prop === 'editora') {
        hasEditora = true;
        break;
    }
}

if (!hasEditora) {
    livro.editora = 'Objetiva';
}

console.log(livro);

//3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

function filtrarPropriedades(objeto, valorMinimo) {
    let novoObjeto = {};
    for (let prop in objeto) {
        if (objeto[prop] > valorMinimo) {
            novoObjeto[prop] = objeto[prop];
        }
    }
    return novoObjeto;
}

let produto = {
    preco: 100,
    peso: 1.5,
    quantidade: 9,
    desconto: 20
};

console.log(filtrarPropriedades(produto, 10)); //Valor Minimo 10


//Manipulação de Arrays de Objetos com for of

// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    { nome: 'Ananda', idade: 27, cidade: 'São João Evangelista' },
    { nome: 'Bruna', idade: 31, cidade: 'São Paulo' },
    { nome: 'Delsa', idade: 58, cidade: 'Belo Horizonte' }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}

//5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    { nome: 'Ananda', nota1: 10, nota2: 9 },
    { nome: 'Bruna', nota1: 6, nota2: 5 },
    { nome: 'Delsa', nota1: 5, nota2: 4 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
}

//6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    { nome: 'João', cargo: 'Gerente de Loja', salario: 5000 },
    { nome: 'Maria', cargo: 'Analista de Dados', salario: 3000 },
    { nome: 'José', cargo: 'Desenvolvedor Web Jr', salario: 4000 }
];

let salarioMinimo = 3500;
for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
}

// Manipulação de Arrays de Objetos com forEach

// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: 'Notebook', preco: 4000, desconto: 0 },
    { nome: 'Cadeira', preco: 700, desconto: 0 },
    { nome: 'Celular', preco: 1500, desconto: 0 }
];

produtos.forEach(produto => {
    produto.preco = produto.preco * 0.9;
    console.log(`Produto: ${produto.nome}, Novo Preço: ${produto.preco}`);
});


// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    { titulo: 'O Chef', diretor: 'Jon Favreau', anoLancamento: 2021 },
    { titulo: '2067', diretor: 'Seth Larney', anoLancamento: 2023 },
    { titulo: 'Rota sem Saída', diretor: 'Nadine Crocke', anoLancamento: 2023 }
];

let titulos = [];
filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);


// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    { nome: 'Alice', idade: 42, cidade: 'São Paulo' },
    { nome: 'Ana Clara', idade: 28, cidade: 'Rio de Janeiro' },
    { nome: 'Júnia', idade: 35, cidade: 'Belo Horizonte' }
];

let contador = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Clientes com mais de 30 anos: ${contador}`);


// Combinação de Estruturas

// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    { produto: 'Notebook', quantidade: 2, valor: 4000 },
    { produto: 'Celular', quantidade: 2, valor: 1000 },
    { produto: 'Tablet', quantidade: 1, valor: 2000 }
];

let valorTotalVendas = 0;
vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total das vendas: R$ ${valorTotalVendas}`);


// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    { cliente: 'Anananda', produto: 'Notebook', quantidade: 2 },
    { cliente: 'Bruna', produto: 'Celular', quantidade: 1 },
    { cliente: 'Ana Clara', produto: 'Tablet', quantidade: 3 }
];

let totalPorCliente = {};
pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] = 0;
    }
    totalPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(totalPorCliente);

// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    { produto: 'Notebook', quantidade: 5, minimo: 10 },
    { produto: 'Celular', quantidade: 15, minimo: 20 },
    { produto: 'Tablet', quantidade: 8, minimo: 5 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);


// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        { nome: 'Notebook', quantidade: 1, precoUnitario: 2000 },
        { nome: 'Celular', quantidade: 2, precoUnitario: 1500 },
        { nome: 'Tablet', quantidade: 3, precoUnitario: 1000 }
    ]
};

let valorTotal = 0;
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$ ${valorTotal}`);

// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
    departamentos: [
        {
            nome: 'Desenvolvimento',
            funcionarios: ['Ananda', 'Bruna']
        },
        {
            nome: 'Marketing',
            funcionarios: ['Delsa', 'Ana Clara']
        }
    ]
};

for (let departamento of empresa.departamentos) {
    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
}

 
// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
    { tipo: 'entrada', valor: 1500 },
    { tipo: 'saída', valor: 500 },
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saída', valor: 100 }
];

let saldoFinal = 0;
transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$ ${saldoFinal}`);
