/**
Quando clicar no pokemon temos que esconder o cartão do pokemon aberto e mostrar o cartão selecionado na listagem
 
 */


const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
      // remover a classe "aberto"
      const cartaoPokemonAberto = document.querySelector('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')

      // remove a classe ativo
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')
      
        
      const idPokemonSelecionado = pokemon.attributes.id.value

      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
      


      const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
      cartaoPokemonParaAbrir.classList.add('aberto')
    })
})