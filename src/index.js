const items = document.querySelectorAll("img");
const itemCount = items.length; // all images tags
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");

let count = 0;

function showNextItem() {
  items[count].classList.remove("active"); // remove class active from the very first image

  //if items are completed then start from 0 else show next item, item -> image
  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }
  //count is handling index number for images
  items[count].classList.add("active");
}

function showPreviousItem() {
  items[count].classList.remove("active");
  // if we keep moving back, then if no images are left then simply start from 0,
  // else decrement count

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }
  items[count].classList.add("active");
}

function keyPress(e) {
  e = e || window.event;
  if (e.keyCode === "37") {
    showPreviousItem(); // when arrow left button is pressed on keyboard
  } else if (e.keyCode === "39") {
    showNextItem(); // when arrow right button is pressed on keyboard
  }
}

//call showNextItem/showPreviousItem function when clicking on right arrow icon/ left arrow icon
nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);
