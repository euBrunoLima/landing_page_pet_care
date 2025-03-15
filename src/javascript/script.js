const hamburguer_menu = document.getElementById('hamburguer_menu')
const mobile_menu = document.getElementById('mobile_menu')
const btn_mobile_header = document.getElementById('nav_list_mobile')
const login_mobile = document.querySelector('.login-mobile')


function showMenu(){
    hamburguer_menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    btn_mobile_header.classList.toggle('active');
    login_mobile.classList.toggle('active');

}


let title = document.querySelector('#cta .title');
const originalText = title.innerHTML;
const originalFontSize = window.getComputedStyle(title).fontSize;
const pawIcon = window.getComputedStyle(document.querySelector('.paw-icon')).all;



function verificarLargura(){
    if (window.innerWidth >= 450 && window.innerWidth <= 630) {
     title.innerHTML = "Nós Cuidamos <br> Dos <br> <span>Seus Pets</span>" +
     "<img class='paw-icon' src='src/images/home-image/paw-icone.png' alt=''>";
     title.style.fontSize = '3.3rem';
    }else if(window.innerWidth < 450){
        title.style.fontSize = 'font-size: clamp(25px, 12vw, 4rem);'
        title.innerHTML = originalText
    }
    else{
        title.innerHTML = originalText;
        title.style.fontSize = originalFontSize;
    }
     
}


verificarLargura()


window.addEventListener('resize', verificarLargura)

document.querySelector(".content-planos").addEventListener("wheel", function(event) {
    if (window.innerWidth <= 1080) {
        if (event.deltaY !== 0 && !event.ctrlKey) {
            const maxScrollLeft = this.scrollWidth - this.clientWidth;
            const currentScrollLeft = this.scrollLeft;

            // Verifica se está no início ou no fim do scroll horizontal
            if ((currentScrollLeft === 0 && event.deltaY < 0) || (currentScrollLeft === maxScrollLeft && event.deltaY > 0)) {
                return ;
            }

            event.preventDefault();
            this.scrollLeft += event.deltaY;
        }
    }
});


const itens = document.querySelectorAll("#nav_list_mobile .nav-item")
const link = document.querySelectorAll("nav ul li")

link.forEach(item => {
    item.addEventListener('click', () => {
        link.forEach(i => i.classList.remove('active')); // Remove a classe 'active' de todos os itens
        item.classList.add('active'); // Adiciona a classe 'active' ao item clicado
    });
});


itens.forEach(item =>{
    item.addEventListener('click', () =>{
        mobile_menu.classList.toggle('active')
        hamburguer_menu.classList.toggle('active');
        
    })
})


// const headerHeight = document.querySelector("#header").clientHeight; // Altura do cabeçalho fixo

document.querySelectorAll("#nav_list_mobile .nav-item a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const id = link.getAttribute("href").substring(1);
        const section = document.getElementById(id);

        if (section) {
            const topo = section.getBoundingClientRect().top + window.scrollY - 312

            window.scrollTo({ top: topo, behavior: "smooth" });
        }
    });
});


const headerHeight = document.querySelector("#header").clientHeight;

document.querySelectorAll("#header  #menu_header  .nav-item  a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const id = link.getAttribute("href").substring(1);
        const section = document.getElementById(id);

        if (section) {
            const topo = section.getBoundingClientRect().top + window.scrollY - headerHeight

            window.scrollTo({ top: topo, behavior: "smooth" });
        }
    });
});



