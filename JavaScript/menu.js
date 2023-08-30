const toggleMenu = () => document.body.classList.toggle("open");

// inicio preloader

function closepreloader(){
    document.getElementById("preloader").style.display = 'none';
}
window.addEventListener("load",function(){
    setTimeout(closepreloader, 1000);
    
});

// fim preloader