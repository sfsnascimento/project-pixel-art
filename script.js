function adicionaClasseSelected() {
  const elemento = document.querySelectorAll('.color');
  for (let index = 0; index < elemento.length; index += 1) {
    elemento[index].addEventListener('click', (event) => {
      const removeClasse = document.querySelector('.selected');
      removeClasse.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
adicionaClasseSelected();

function selecionaCor() {
  const pixelElement = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelElement.length; index += 1) {
    pixelElement[index].addEventListener('click', (event) => {
      const e = event;
      const removeClasse = document.querySelector('.selected');
      const colorEl = removeClasse.innerText;
      e.target.style.backgroundColor = colorEl;
    });
  }
}
selecionaCor();

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

function tamanhoQuadroPixel() {
  const botaoEl = document.getElementById('generate-board');
  botaoEl.addEventListener('click', () => {
    const inputEl = document.getElementById('board-size');
    const pixelEl = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelEl.length; index += 1) {
      const inputValue = `${inputEl.value} + 'px'`;
      pixelEl[index].style.width = inputValue;
      pixelEl[index].style.height = inputValue;
    }
  });
}

tamanhoQuadroPixel();
