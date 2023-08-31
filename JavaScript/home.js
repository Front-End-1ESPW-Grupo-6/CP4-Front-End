const toggleMenu = () => document.body.classList.toggle("open");

// inicio preloader

function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 1000);
    
});

// fim preloader

//inicio imagem principal
const imgPrincipal = document.querySelector("#mainImg")
if (window.matchMedia("(min-width:600px)").matches) {
    /* a viewport tem pelo menos 800 pixels de largura */
    imgPrincipal.src = "../imgs/Foto vinicola.jpg"
    console.log('a viewport tem pelo menos 600 pixels de largura')
  } else {
    /* a viewport menos que 800 pixels de largura */
    imgPrincipal.src = "../imgs/Foto vinicola cell.png"
    console.log('a viewport menos que 800 pixels de largura')
  }