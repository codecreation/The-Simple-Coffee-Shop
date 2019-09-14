console.log("Got here");

// window.addEventListener('scroll', function(e) {
//
//   const header = document.querySelector('.header-text');
//
//
//     header.style.opacity = "0";
//
//
//     console.log("here");
//
//
//   e.preventDefault();
// })

$(window).scroll(function() {
  if($(this).scrollTop() > 80){
    $(".header-text").css({"opacity" : "0"})
  }else{
    $(".header-text").css({"opacity" : "1"})
  }
})
