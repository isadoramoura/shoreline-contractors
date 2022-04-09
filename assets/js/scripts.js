var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

var faqAnswer = document.querySelector('.accordion__hidden');
var faqPlus = document.querySelector('.h6');

faqPlus.onclick = function() {
        // if (faqAnswer.style.display === "none") {
        //     faqAnswer.style.display = "block";
        // } else {
        //     faqAnswer.style.display = "none";
        // }
        
}

$('.accordion h4').on('click',function(){
    $(this).next('.accordion__hidden').slideToggle().parent().toggleClass('is-active');
});