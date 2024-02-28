let verificarTela = () => {
    let largura = window.screen.width;

    if(largura <= 576) {
        document.addEventListener("scroll", function() {
            let elemento = document.querySelector(".circulo-stella-mobile");
            let scrollPosY = window.pageYOffset || document.documentElement.scrollTop;
            let imgJornal = document.querySelector(".img-jornal-mobile");
        
            if(scrollPosY > 150 && scrollPosY < 340) {
                elemento.style.top = scrollPosY + "px";
            }
            
            if(scrollPosY > 340) {
                imgJornal.style.opacity = "1"
            } else {
                imgJornal.style.opacity = "0"
            }
        });
    } else {
        document.addEventListener("scroll", function() {
            let elemento = document.querySelector(".circulo-stella");
            let scrollPosY = window.pageYOffset || document.documentElement.scrollTop;
            let imgJornal = document.querySelector(".img-jornal");
        
            if(scrollPosY > 280 && scrollPosY < 880) {
                elemento.style.top = scrollPosY + "px";
            }
            
            if(scrollPosY > 880) {
                imgJornal.style.opacity = "1"
            } else {
                imgJornal.style.opacity = "0"
            }
        });
    }

} 

verificarTela()


window.addEventListener('resize', () => {
    verificarTela()
})





