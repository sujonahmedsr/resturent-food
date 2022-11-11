let navbar = document.querySelector('header .nabvar');
document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}