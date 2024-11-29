/*
Requisitos

a) Quando o usuário clicar no botão "Get a new quote":
   1. O programa deverá selecionar de maneira aleatória uma nova frase contida em quotes.json
   2. O programa deverá trocar a frase atual que esta sendo exibida no front-end pela nova frase selecionada no passo anterior. 

   Exceções:
     Caso a frase atual seja igual a nova frase selecionada aleatoriamente, o programa deve escolher uma nova frase até que seja diferente.

b) Quando o usuário clicar no botão 'share it':
   1. O programa deverá selecionar a frase que esta sendo exibida;
   2. Redirecionar o usuário para o "xburger", enviando a frase para ser postada no perfil do usuário.
   3. A frase deve aparecer na caixa de tweet para ser postada e deverá ser a adicionada a frase a hashtag #quotes

*/

var randomNumber, tweet;//Declara as váriaveis randomNumber e tweet vazias


// 1. O programa deverá selecionar de maneira aleatória uma nova frase contida em quotes.json
// importar o arquivo json - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with
import data from "./quotes.json" with {type : "json"};
console.log (data.length);

// selecionar frase aleatoriamente com o método Math.floor((Math.random() * <tamanho do array>))
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random


// selecionar nó do html relacionado a mensagem  
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector

const message = document.querySelector('#message');//Declara a variável message com o elemento message do html
const newQuote = document.querySelector('#newQuote');//Declara a variável newQuote com o elemento newQuote do html
const shareTwitter = document.querySelector('#shareTwitter');//Declara a variável shareTwitter com o elemento shareTwitter do html

// selecionar nó do html relacionado ao botão de novas frases
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById
// selecionar nó do html relacionado ao botão de compartilhar twitter



/* adicionar evento de click para quando usuário clicar no botão newQuote
   passos: 
   1. adicionar evento click; 
   2. adicionar funcionalidade de alterar frase
   
   https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
   https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
*/

newQuote.addEventListener('click', async () => {//Função assincrona que se inicia quando o 'botão' newQuote é pressionado
   do {//Executa o código abaixo uma vez
       randomNumber = Math.floor(Math.random() * data.length);//Sorteia um numero de 0 ao tamanho do array
   } while (message.innerHTML === data[randomNumber].quote);//Enquanto o Texto que está sendo exibido for igual ao que vai ser exibido ele irá reiniciar o loop
   tweet = `"${data[randomNumber].quote}" \n \n#newQuotes`;//Atribui o valor da variavel text com a quote sorteada mais #newQuotes
   message.innerHTML = `"${data[randomNumber].quote}"`;//Exibe a nova quote
})



/* adicionar evento de click para quando usuário clicar no botão shareIt
   https://developer.x.com/en/docs/x-for-websites/tweet-button/overview
*/

shareTwitter.addEventListener('click', () => {//Função que se inicia quando o 'botão' shareTwitter é pressionado
   if (!tweet) {//Verifica se a váriavel tweet esta indefinida
       tweet = message.innerHTML + " \n \n#newQuotes";//Atribui o valor da variavel text com a quote inicial mais #newQuotes
   }
   var tweeturl = "https://x.com/intent/tweet?text=" + encodeURIComponent(tweet);//Cria o URL com a variavel tweet
   window.open(tweeturl, '_blank');//Abre o URL do twitter
})







