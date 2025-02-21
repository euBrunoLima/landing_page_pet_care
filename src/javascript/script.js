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
     title.style.fontSize = '3.2rem';
    }
    else{
        title.innerHTML = originalText;
        title.style.fontSize = originalFontSize;
        

    }
     
}

verificarLargura()

window.addEventListener('resize', verificarLargura)