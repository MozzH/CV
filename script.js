//Simple way to not show the progress bar when reloading
$(document).ready(function(){
    $(window).scrollTop(1);
});

//Custom cursor
const cursorSpot = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursorSpot.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
})

//Magnet button
const mm = new MagnetMouse({
    magnet: {
        element: ".magnet",
    },
});
mm.init();

//Fade in Fade out effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Make background black when scrolling
$(document).ready(function() {
    $(window).scroll(function(){
        $('.background').css("opacity", 1 -
        $(window).scrollTop() / 300)
    })}
    , $(window).scroll(function(){
    $('.title').css("opacity", 1 -
        $(window).scrollTop() / 100)}));

//Custom scrollbar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    $('.back-to-top').hide();
    let progressHeight = (window.scrollY / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


$(window).scroll(function() {
    if ($(this).scrollTop() > 5) {
      $('.scroll-down').addClass('hidden');
    } else {
      $('.scroll-down').removeClass('hidden');
    }
  });



