const toggleMenu = () => document.body.classList.toggle("open");

function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 500);
    
});

//Variaveis
const loginNav = document.querySelector('#login')
const desconect = document.querySelector('#desconect')

//Verificação se o usuário esta logado
window.addEventListener("load", () => {
  console.log("Evento de carregamento acionado");
  let userLog = JSON.parse(localStorage.getItem("userLog"));
  let coverLogin = document.querySelector("#coverLogin")
  console.log(userLog)
  if (userLog === 1) {
    loginNav.href = 'javascript:void(0);'
    console.log("Usuario esta logado");
    let userLogado = JSON.parse(localStorage.getItem('logedUser'));
    console.log(userLogado);
    console.log(userLogado[0].name);
    loginNav.innerHTML = userLogado[0].name
    loginNav.addEventListener('click', () => {
      console.log('Abre login bar')
      const innerLoginBar = document.querySelector('#loginBar')
      innerLoginBar.classList.toggle('abreNav')
    });
    desconect.addEventListener('click', () => {
      localStorage.setItem("userLog", JSON.stringify("0"))
      location.reload();
      console.log('Usuario deslogado');
    })
  }
})