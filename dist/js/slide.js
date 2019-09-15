const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

var i = 0;
var images = [];
var time = 1000;

images[0] = '../img/pic2.jpg';
images[1] = '../img/pic3.jpg';
images[2] = '../img/pic4.jpg';
images[3] = '../img/pic5.jpg';
images[4] = '../img/pic6.jpg';
images[5] = '../img/pic7.jpg';




const nextSlide = () =>{
  const active = document.querySelector('.active');
  active.classList.remove('active');

  if(active.nextElementSibling){
    active.nextElementSibling.classList.add('active');
  }else{
    slides[0].classList.add('active');
  }
  setTimeout(()=> active.classList.remove('active'));
}

const prevSlide = () =>{
  const active = document.querySelector('.active');
  active.classList.remove('active');

  if(active.previousElementSibling){
    active.previousElementSibling.classList.add('active');
  }else{
    slides[slides.length - 1].classList.add('active');
  }
  setTimeout(()=> active.classList.remove('active'));
}

// button events

next.addEventListener('click', e=>{
  nextSlide();
});

prev.addEventListener('click', e=>{
  prevSlide();
});

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    ++i;
  }else{
    i = 0;
  }

  setTimeout("changeImg()", time);
}
