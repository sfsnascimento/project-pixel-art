function adicionaClasseSelected () {  
  const elemento = document.querySelectorAll('.color');
  for (let index = 0; index < elemento.length; index += 1) {
    elemento[index].addEventListener('click', function (event) {
    const removeClasse = document.querySelector('.selected');
    removeClasse.classList.remove('selected');
    event.target.classList.add('selected');
    });
  }
}
adicionaClasseSelected();

function selecionaCor () {  
  const pixelElement = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelElement.length; index += 1) {
    pixelElement[index].addEventListener('click', function (event) {
    const removeClasse = document.querySelector('.selected');
    const colorEl = removeClasse.innerText;
    event.target.style.backgroundColor = colorEl;
    });
  }
}
selecionaCor();

function limpar () {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', function () {
    const boardEl = document.getElementsByClassName('pixel');
    for (let index = 0; index < boardEl.length; index += 1) {
      boardEl[index].style.backgroundColor = 'white';
    }
  });
}
limpar ();