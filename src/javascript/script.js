const hamburguer_menu = document.getElementById('hamburguer_menu')
const mobile_menu = document.getElementById('mobile_menu')
const btn_mobile_header = document.getElementById('nav_list_mobile')
const login_mobile = document.querySelector('.login-mobile')

console.log(login_mobile);

function showMenu(){
    hamburguer_menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    btn_mobile_header.classList.toggle('active');
    login_mobile.classList.toggle('active');

    


}
