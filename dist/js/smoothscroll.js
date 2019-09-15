// Smooth Scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//current class
document.getElementById('main-nav').addEventListener('click', function(e) {
  e.target.classList.add('current');
})
