const questions = [
    {
        question: "O que é uma variável?",
        answers: [
            { option: "Uma variável é um espaço na memória do computador onde é possível armazenar valores.", correct: true },
            { option: " Uma Variavel é um Nome ou Numero.", correct: false },
            { option: "Uma Variavel é um tipo de dado que contem somente caracteres", correct: false },
            { option: "Não sei pô", correct: false },
        ],

    },
    {
        question: "Qual é a saída do seguinte código em JavaScript? console.log(typeof [])",
        answers: [
            { option: "Array", correct: false },
            { option: "undefined", correct: false },
            { option: "object", correct: true },
            { option: "Não sei pô", correct: false },

        ],

    },
    {
        question: "O que é uma constante em programação?",
        answers: [
            { option: "Uma constante é um tipo de dado", correct: false },
            { option: "Uma constante é uma função", correct: false },
            { option: "Uma constante é uma variável cujo valor não pode ser modificado após sua inicialização.", correct: true },
            { option: "Não sei pô", correct: false }]
    },
    {
        question: "Qual é a saída do seguinte código em JavaScript? console.log(2 + '2')",
        answers: [
            { option: "4", correct: false },
            { option: "22", correct: true },
            { option: "error", correct: false },
            { option: "Não sei pô", correct: false },
        ],

    },
    {
        question: "O que é um operador lógico?",
        answers: [
            { option: "Operadores lógicos são utilizados para realizar operações matemáticas", correct: false },
            { option: "Operadores lógicos são utilizados para modificar o valor de uma variável", correct: false },
            { option: "Operadores lógicos são utilizados para realizar operações lógicas, como negação, conjunção e disjunção, em expressões booleanas.", correct: true },
            { option: "Não sei pô", correct: false },
        ]
    },
    {
        question: "O que é uma string em programação?",
        answers: [
            { option: "Uma string é um tipo de dado numérico", correct: false },
            { option: "Uma string é uma sequência de caracteres, como palavras ou frases.", correct: true },
            { option: "Uma string é um tipo de estrutura de dados", correct: false },
            { option: "Não sei pô", correct: false },
        ]
    },
    {
        question: "O que é uma função em programação?",
        answers: [
            { option: "Uma função é um conjunto de instruções que realizam uma tarefa específica.", correct: true },
            { option: "Uma função é um tipo de dado que armazena valores", correct: false },
            { option: "Uma função é um loop que é executado várias vezes", correct: false },
            { option: "Não sei pô", correct: false },
        ],
    },
    {
        question: "Como é declarada uma variável em JavaScript?",
        answers: [
            { option: "NomeDaVariavel", correct: false },
            { option: "const nomeDaVariavel", correct: false },
            { option: "var nomeDaVariavel", correct: true },
        { option: "Não sei pô", correct: false },
        ],
        },
        {
        question: "Qual é o comando para imprimir algo no console do JavaScript?",
        answers: [
            { option: "print()", correct: false },
            { option: "console.log()", correct: true },
            { option: "echo()", correct: false },
        { option: "Não sei pô", correct: false },
        ],
        },
        {
        question: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
        answers: [
            { option: "func nomeDaFuncao(){ }", correct: false },
            { option: "nomeDaFuncao(){ }", correct: false },
            { option: "function nomeDaFuncao(){ }", correct: true },
            { option: "Não sei pô", correct: false },
        ],
        },
        {
        question: "Como é declarado um array em JavaScript?",
        answers: [
            { option: "var nomeDoArray = {}", correct: false },
            { option: "var nomeDoArray = []", correct: true },
        { option: "var nomeDoArray = new Array()", correct: true },
        { option: "Não sei pô", correct: false },
        ],
        },
        {
        question: "Como é acessado um elemento em um array em JavaScript?",
        answers: [
        { option: "nomeDoArray[índice]", correct: true },
        { option: "nomeDoArray.índice", correct: false },
        { option: "nomeDoArray.get(índice)", correct: false },
        { option: "Não sei pô", correct: false },
        ],
        },

];





export default { questions }