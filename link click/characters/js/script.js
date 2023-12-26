"use strict"

const links = document.querySelectorAll('nav li');


icons.addEventListener("click", () =>{
    nav.classList.toggle("active");
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
})

let mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        mode.src = "img/sun.png";        
    }else{
        mode.src = "img/moon.png";
    }

}