const linksAtivo = document.querySelectorAll(".link");

function addClassLinkAtivo(item, index) {
  const hrefLink = item.href;
  const hrefPagina = document.location.href;
  if (hrefPagina.includes(hrefLink)) {
    item.classList.add("ativo");
  }
}

linksAtivo.forEach(addClassLinkAtivo);

// URL

const parametro = new URLSearchParams(location.search);

function ativarProduto(param) {
  const elemento = document.getElementById(param);
  if (elemento) elemento.checked = true;
}

parametro.forEach(ativarProduto);

// FAQ CLICK

const dtTitulo = document.querySelectorAll("dt");
const ddDescricao = document.querySelectorAll("dd");

ddDescricao.forEach((item) => {
  item.style.display = "none";
  ddDescricao[0].style.display = "block";
  dtTitulo[0].classList.add("de");
});
function ativarFaq(item, index) {
  dtTitulo[index].classList.add("de");
  ddDescricao[index].style.display = "block";
}

dtTitulo.forEach((item, index) => {
  item.addEventListener("click", () => {
    ativarFaq(item, index);
  });
});

// GALERIA

const containerGaleria = document.querySelector(".imagem-bicicleta");

const imagens = document.querySelectorAll(".imagem-bicicleta img");

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  const img = event.currentTarget;
  if (matchMedia("(min-width:800px)").matches) containerGaleria.prepend(img);
}

imagens.forEach(eventoGaleria);

if (window.SimpleAnime) new SimpleAnime();
