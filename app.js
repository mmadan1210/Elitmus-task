const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () =>{
    menuElement.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

const removeActiveClass = e =>{
    if(e.target.classList.contains('list-link')){
        menuElement.classList.toggle('active');
        menuToggleButton.classList.toggle('active');
        console.log('It does have the list link class');
    }
    else{
        console.log('Does not have the list link class');
    }
}
document.addEventListener('click', removeActiveClass);

const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
};
const  toggleTheme = () =>{
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active');
    }
    else{
        localStorage.remonclioveItem('darkTheme');
    }
};
themeToggleButton.addEventListener('click', toggleTheme);

function onClickLinkedIn(){
    window.open("https://www.linkedin.com/in/mohit-madan-1210", "_blank");
}
function onClickInsta(){
    window.open("https://www.instagram.com/madan_mohit12","_blank");
}
function onClickTwitter(){
    window.open("https://twitter.com/MohitMadan9","_blank");
}



