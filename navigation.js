let menuBar = document.querySelector(".menuBar");
let closeIcon = document.querySelector(".closeIcon");
let menuContainer = document.querySelector(".menu-container");
let menuIcons = document.querySelector(".menuIcons");
let links = document.querySelectorAll(".hyperLink-container");

closeIcon.style.display = "none";

menuBar.addEventListener("click", function(){
    closeIcon.style.display = "block";
    menuBar.style.display = "none";
    menuContainer.style.display = "block";
    menuContainer.style.backgroundColor = "#1f2121f8";
    menuContainer.style.width = "100%";
    menuContainer.style.height = "100vh";
    links.forEach((hyperLink) =>{
        hyperLink.style.display = "block";
    })

    
});

closeIcon.addEventListener("click", function(){
    links.forEach((hyperLink) => {
        hyperLink.style.display = "none";
    });
    menuContainer.style.backgroundColor = "transparent";
    menuContainer.style.width = "auto";
    menuContainer.style.height = "auto";
    closeIcon.style.display = "none";
    menuBar.style.display = "block";
    menuIcons.style.display = "block";
    
});