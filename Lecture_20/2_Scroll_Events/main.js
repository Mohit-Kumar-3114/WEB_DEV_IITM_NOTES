let para = document.querySelector("p")

window.addEventListener("scroll", function(){
    if(window.scrollY < 300){
        para.style.background = "red"
    }
    else {
        para.style.backgroundColor = "green"
    }
})