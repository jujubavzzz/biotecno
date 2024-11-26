function criacartao (pergunta, resposta) {
    let conteudo = document.getElementById (' conteudo')
    let cartao = document. createElement ('article')
    cartao. className = cartao

    cartao. innerHTML =
     <div class= "cartao- -conteudo">
    <div class="cartao--pergunta"><p>$(pergunta)</p> </div>
    <div class="cartao--resposta"><p>$(resposta)</p› </div>
    </div>

    console. log (cartao)

    let respostaEstaVisivel = false

    function viraCartao () {
      respostaEstaVisivel = 1respostaEstaVisivel
      cartao.classList. toggle('active', respostaEstaVisivel)}

    cartao.addEventListener('click', viracartao) 
    conteudo. appendChild (cartao)