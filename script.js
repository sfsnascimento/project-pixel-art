function requisito6 () {
  const elementoInicial = document.getElementsByClassName('color')[0];
  elementoInicial.className += ' selected';
}
requisito6();

function requisito7 () {  
  const elemento = document.querySelectorAll('.color');
  for (let index = 0; index < elemento.length; index += 1) {
    elemento[index].addEventListener('click', function (event) {
    const removeClasse = document.querySelector('.selected');
    removeClasse.classList.remove('selected');
    event.target.classList.add('selected');
    
    });
  }

 /* elemento.addEventListener('click', function (event) {
  elemento.classList.add('selected');
  const selecionado = document.querySelector('.selected');
  });*/
}
requisito7();


/*  const elemento1 = document.getElementsByClassName('color')[0];
  const elemento2 = document.getElementsByClassName('color')[1];
  const elemento3 = document.getElementsByClassName('color')[2];
  const elemento4 = document.getElementsByClassName('color')[3];

  elementos.addEventListener('click', function () {
  elementos.className += ' selected';
  const classeSelecionada = document.getElementsByClassName('selected');
  });

  elementos.addEventListener('click', function () {
  elementos.className += ' selected';
  const classeSelecionada = document.getElementsByClassName('selected');
  });

  elementos.addEventListener('click', function () {
  elementos.className += ' selected';
  const classeSelecionada = document.getElementsByClassName('selected');
  });

  elementos.addEventListener('click', function () {
  elementos.className += ' selected';
  const classeSelecionada = document.getElementsByClassName('selected');
  });
}
requisito7();*/