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
    slide.addEventListener("mousedown", slideDraggable.dragStart);
    slide.addEventListener("touchstart", slideDraggable.dragStart);
    slide.addEventListener("mouseup", slideDraggable.dragEnd);
    slide.addEventListener("touchend", slideDraggable.dragEnd);
    slide.addEventListener("mouseleave", slideDraggable.dragEnd);
    slide.addEventListener("mousemove", slideDraggable.drag);
    slide.addEventListener("touchmove", slideDraggable.drag);
  });

  function DraggableObject(slide, index) {
    this.slide = slide;
    this.index = index;

    this.dragStart = function (event) {
      event.preventDefault();
      isDragging = true;
      currentIndex = index;
      startPosition = getPositionX(event);
      slider.classList.add("grabbing");
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
      slider.classList.remove("grabbing");
    };

    this.drag = function (event) {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPosition;
      }
    };
  }

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) {
      requestAnimationFrame(animation);
    }
    // Remove the 'selected' class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("selected");
    });

    // Add the 'selected' class to the current slide
    slides[currentIndex].classList.add("selected");
  }

  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * -slides[0].offsetWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
  }

  window.addEventListener("resize", setPositionByIndex);

  setPositionByIndex();
});
const sliderContainer2 = document.querySelectorAll(".plan__options");
sliderContainer2.forEach((slider) => {
    const slides = slider.querySelectorAll(".plan__options_item");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 1;
window.addEventListener("resize", () => {
  if(window.innerWidth >= 834 && window.innerWidth < 1024){
    currentIndex = 0
  }else{
    currentIndex = 1
  }  
});

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

// creating and event listener for the checkbox collaose accordion

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((element) => {
  let textAccordion = element.nextElementSibling.classList;
  let icon =
    element.previousElementSibling.firstElementChild.lastChild.classList;
  element.addEventListener("click", () => {
    if (element.checked) {
      textAccordion.add("active");
      icon.toggle("rotate");
    } else {
      textAccordion.remove("active");
      icon.toggle("rotate");
    }
  });
});

/* this function add the fade in animation to the imagines */
function fadeInImage(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}

const images = document.querySelectorAll('.fade-in');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const imageObserver = new IntersectionObserver(fadeInImage, observerOptions);

images.forEach((image) => {
  imageObserver.observe(image);
});
