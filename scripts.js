const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
    if(window.scrollY > 100) {
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
});

const 
    toggleBtn = document.querySelector('.togglebtn'),
    menu_button = document.querySelector('.hc_block'),
    menu = document.querySelector('.h_content'),
    home = document.querySelector('.home'),
    about = document.querySelector('.about'),
    pricing = document.querySelector('.pricing'),
    drones = document.querySelector('.drones'),
    realizations = document.querySelector('.realizations'),
    contact = document.querySelector('.contact'),
    welcome = document.querySelector('.welcome'),
    advantage = document.querySelector('.advantage'),
    skills = document.querySelector('.skills'),
    videos = document.querySelector('.videos');
    email_block = document.querySelector('.email_block');

toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('open');
    header.classList.toggle('open');
    document.querySelector(".h_logo").classList.toggle('open');
    document.querySelector(".togglebtn").classList.toggle('open');
});

const links = document.querySelectorAll('.nav_item');
const blocks = document.querySelectorAll('.block');

links.forEach(function(link){
    link.addEventListener('click', function(){

        [...blocks].find(function(block){
            return block.classList.contains(link.dataset.target);
        }).scrollIntoView({block: "start", behavior: "smooth"});

        menu.classList.toggle('open');
        document.querySelector(".h_logo").classList.toggle('open');
        document.querySelector(".togglebtn").classList.toggle('open');
        header.classList.toggle('open');
    })
})

ymaps.ready(init);
function init(){
    const 
        myMap = new ymaps.Map("map", {
            center: [55.741009, 52.407031],
            zoom: 12,
            controls: []
        }),
        placemarkTemplate = ymaps.templateLayoutFactory.createClass(`
        <svg width="50" height="50" version="1.1" x="0px" y="0px" viewBox="0 0 306.034 306.034" style="enable-background:new 0 0 306.034 306.034;">
            <defs>
                <linearGradient id="Gradient1" gradientTransform="rotate(90)">
                    <stop offset="0%" stop-color="#dd5809"/>
                    <stop offset="100%" stop-color="#ce112c"/>
                </linearGradient>
            </defs>
            <path fill="url(#Gradient1)" d="M153.017,0c-50.855,0-92.219,41.375-92.219,92.219c0,48.903,84.528,200.114,88.129,206.527
                l4.09,7.288l4.096-7.288c3.595-6.418,88.124-157.624,88.124-206.527C245.237,41.375,203.862,0,153.017,0z M153.017,119.904
                c-19.156,0-34.745-15.588-34.745-34.75c0-19.167,15.588-34.756,34.745-34.756c19.167,0,34.756,15.588,34.756,34.756
                C187.773,104.316,172.179,119.904,153.017,119.904z"/>
        </svg>
        `),
        coords = [
            [55.741009, 52.407031],
            [55.757621, 52.418533],
            [55.724696, 52.463509]
        ];

    coords.forEach(function(coord){
        myMap.geoObjects.add(new ymaps.Placemark(coord, {}, {
            iconLayout: placemarkTemplate
        }));
    })
}