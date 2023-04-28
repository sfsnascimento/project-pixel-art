function createBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const quantidade = document.querySelector('#board-size').value || 64;

  for (let i = 0; i < quantidade; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}
createBoard();

function paletaDeCores() {
  const black = document.querySelector('[data-color="black"]');
  const red = document.querySelector('[data-color="red"]');
  const blue = document.querySelector('[data-color="blue"]');
  const green = document.querySelector('[data-color="green"]');

  black.style.backgroundColor = 'black';
  red.style.backgroundColor = 'red';
  blue.style.backgroundColor = 'blue';
  green.style.backgroundColor = 'green';
}
paletaDeCores();

function selecionaCor() {
  const elementos = document.querySelectorAll('.pixel');
  console.log(elementos);

  elementos.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
      const e = event;
      const selected = document.querySelector('.selected');
      const cor = selected.dataset.color;
      e.target.style.backgroundColor = cor;
    });
  });
}
selecionaCor();

const generateBoard = document.querySelector('#generate-board');

generateBoard.addEventListener('click', () => {
  const quantidade = document.querySelector('#board-size').value;

  if (quantidade < 65) {
    const board = document.querySelector('#pixel-board');

    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }

    createBoard();
    selecionaCor();
  }
});

function adicionaClasseSelected() {
  const elementos = document.querySelectorAll('.color');

  elementos.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
      const removeClasse = document.querySelector('.selected');

      if (removeClasse) removeClasse.classList.remove('selected');

      event.target.classList.add('selected');
    });
  });
}
adicionaClasseSelected();

function limpar() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', () => {
    const boardEl = document.getElementsByClassName('pixel');
    for (let index = 0; index < boardEl.length; index += 1) {
      boardEl[index].style.backgroundColor = 'white';
    }
  });
}
limpar();
