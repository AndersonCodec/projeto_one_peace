// window.alert("Bem vindo ao site: One-Peace!!!");
//console.log(document.getElementById('chopper'));

/* const botao = document.getElementById('chopper');
 console.log(botao); */

/* const botoes = document.querySelectorAll('.botao');
console.log(botoes); */


/*
Objetivo 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado:
1- Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.
2- Adicionar a classe "selecionado" no botão que o usuário clicou.
3- Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.
*/

/*
Objetivo 2 - Quando clicar no botão do personagem mostrar as informações do personagem.

4- Pegar os personagens no JS pra poder mostrar ou esconder ele.
5- Adicionar a classe "selecionado" no personagem que o usuário selecionou.
6- Verificar se já existe um personagem selecionado, se sim, devemos remover a selecão dele.
*/

const botoes = document.querySelectorAll('.botao'); // 1-
const personagens = document.querySelectorAll('.personagem'); // 4-

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPesonagem();
        botao.classList.add("selecionado"); // 2-
        personagens[indice].classList.add("selecionado"); // 5-
    });
});

function desselecionarPesonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado"); //6
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado"); // 3-
    botaoselecionado.classList.remove("selecionado");
}

