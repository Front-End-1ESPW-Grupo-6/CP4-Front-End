const toggleMenu = () => document.body.classList.toggle("open");

function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 500);
    
});