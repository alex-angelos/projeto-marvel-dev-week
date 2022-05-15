/*
OBJETIVO 1

Quando o mouse estiver em cima do personagem, deverá adicionar a class "personagem selecionado" e remover a class "selecionado" do personagem atual
*/

const characters = document.querySelectorAll('.personagem')


characters.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelect = personagem.attributes.id.value;

        if (idSelect === 'ultron') return;

        /*
        OBJETIVO 1

        Quando o mouse estiver em cima do personagem, deverá adicionar a class "personagem selecionado" e remover a class "selecionado" do personagem atual
        */

        const selectCharacter = document.querySelector('.selecionado');
        selectCharacter.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        /*
        OBJETIVO 2

        Quando o mouse estiver em cima do personagem, deverá alterar a imagem e nome do personagem grande jogador 1
        */



        const imgPlayer1 = document.getElementById('personagem-jogador-1');

        imgPlayer1.src = `./src/imagens/${idSelect}.png`

        const namePlayer1 = document.getElementById('nome-jogador-1');

        const nameSelect = personagem.getAttribute('data-name');

        namePlayer1.innerHTML = nameSelect


    })
})