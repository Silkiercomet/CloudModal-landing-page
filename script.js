const sliderContainer = document.querySelectorAll(".carousel__container");
sliderContainer.forEach((slider) => {
    const slides = slider.querySelectorAll(".carousel__container_item");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 1;

slides.forEach((slide, index) => {
  const slideDraggable = new DraggableObject(slide, index);
  slide.addEventListener('mousedown', slideDraggable.dragStart);
  slide.addEventListener('touchstart', slideDraggable.dragStart);
  slide.addEventListener('mouseup', slideDraggable.dragEnd);
  slide.addEventListener('touchend', slideDraggable.dragEnd);
  slide.addEventListener('mouseleave', slideDraggable.dragEnd);
  slide.addEventListener('mousemove', slideDraggable.drag);
  slide.addEventListener('touchmove', slideDraggable.drag);
});

function DraggableObject(slide, index) {
  this.slide = slide;
  this.index = index;

  this.dragStart = function (event) {
    event.preventDefault();
    isDragging = true;
    currentIndex = index;
    startPosition = getPositionX(event);
    slider.classList.add('grabbing');
    animationID = requestAnimationFrame(animation);
  };

  this.dragEnd = function () {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -85 && currentIndex < slides.length - 1) {
      currentIndex++;
    }

    if (movedBy > 85 && currentIndex > 0) {
      currentIndex--;
    }

    setPositionByIndex();
    slider.classList.remove('grabbing');
  };

  this.drag = function (event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPosition;
    }
  };
  
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }
  // Remove the 'selected' class from all slides
slides.forEach((slide) => {
    slide.classList.remove('selected');
  });
  
  // Add the 'selected' class to the current slide
  slides[currentIndex].classList.add('selected');
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -slides[0].offsetWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

window.addEventListener('resize', setPositionByIndex);

setPositionByIndex();

});


const sliderContainer2 = document.querySelectorAll(".plan__options");
window.addEventListener('resize', function(){
  sliderContainer2.forEach((slider) => {
    const slides = slider.querySelectorAll(".plan__options_item");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 1;
let finish = false
if (window.innerWidth >= 834 && window.innerWidth < 1024) {
  currentIndex = 0; 
}


slides.forEach((slide, index) => {
  let mediaQuery = window.matchMedia("(min-width: 334px) and (max-width: 1023px)");
  const slideDraggable = new DraggableObject(slide, index);
  function handleScreenSizeChange(mq){
  if (mq.matches) {

    slide.addEventListener('mousedown', slideDraggable.dragStart);
    slide.addEventListener('touchstart', slideDraggable.dragStart);
    slide.addEventListener('mouseup', slideDraggable.dragEnd);
    slide.addEventListener('touchend', slideDraggable.dragEnd);
    slide.addEventListener('mouseleave', slideDraggable.dragEnd);
    slide.addEventListener('mousemove', slideDraggable.drag);
    slide.addEventListener('touchmove', slideDraggable.drag);
    finish = false
  } else {
    // Screen size is outside the specified range
    slide.removeEventListener('mousedown', slideDraggable.dragStart);
    slide.removeEventListener('touchstart', slideDraggable.dragStart);
    slide.removeEventListener('mouseup', slideDraggable.dragEnd);
    slide.removeEventListener('touchend', slideDraggable.dragEnd);
    slide.removeEventListener('mouseleave', slideDraggable.dragEnd);
    slide.removeEventListener('mousemove', slideDraggable.drag);
    slide.removeEventListener('touchmove', slideDraggable.drag);
    // Call your function or perform any actions here
    finish = true
    console.log("Screen size is outside the range");
    return
  }}
  handleScreenSizeChange(mediaQuery);


});
if(!finish){
  return
}
function DraggableObject(slide, index) {
  this.slide = slide;
  this.index = index;

  this.dragStart = function (event) {
    event.preventDefault();
    isDragging = true;
    currentIndex = index;
    startPosition = getPositionX(event);
    slider.classList.add('grabbing');
    animationID = requestAnimationFrame(animation);
  };

  this.dragEnd = function () {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -85 && currentIndex < slides.length - 1) {
      currentIndex++;
    }

    if (movedBy > 85 && currentIndex > 0) {
      currentIndex--;
    }

    setPositionByIndex();
    slider.classList.remove('grabbing');
  };

  this.drag = function (event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPosition;
    }
  };
  
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }

}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -slides[0].offsetWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}


window.addEventListener('resize', setPositionByIndex);

});
});






// creating and event listener for the checkbox collaose accordion

const accordion = document.querySelectorAll(".accordion")

accordion.forEach(element => {
    let textAccordion =  element.nextElementSibling.classList
    let icon = element.previousElementSibling.firstElementChild.lastChild.classList
    element.addEventListener("click", () => {
        if(element.checked){
            textAccordion.add("active")
            icon.toggle("rotate")
         }else{
             textAccordion.remove("active")
             icon.toggle("rotate")
         }
    })
} )