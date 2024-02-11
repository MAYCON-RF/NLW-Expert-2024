const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "variavel nome = valor",
            "let nome = valor",
            "const nome = valor"
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes métodos é utilizado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara dois valores, ignorando o tipo",
            "Compara dois valores, incluindo o tipo",
            "Atribui um valor a uma variável"
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes métodos é utilizado para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "toString()",
            "toUpperCase()"
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "# Este é um comentário"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída da expressão '3' + 2 em JavaScript?",
        respostas: [
            "32",
            "5",
            "Erro"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador de adição",
            "Operador de concatenação",
            "Operador lógico AND"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma função em JavaScript?",
        respostas: [
            "funcao minhaFuncao() {}",
            "function minhaFuncao() {}",
            "var minhaFuncao = function() {}"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas: [
            "Remove um evento de um elemento",
            "Adiciona um evento a um elemento",
            "Substitui um evento em um elemento"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão typeof null em JavaScript?",
        respostas: [
            "object",
            "null",
            "undefined"
        ],
        correta: 0
    }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

    //conta apenas uma vez a pontuação
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')   
  //loop de repetição
  for(const item of perguntas){ 
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta   

      //loop de repetição da respostas      
      for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        //onchange pega mudanças
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)

          }

        mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

 

        quizItem.querySelector('dl').appendChild(dt)
      }


      quizItem.querySelector('dl dt').remove()



      //coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }

