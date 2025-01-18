const body = document.querySelector('body');
const img = document.querySelector('img');

const mainDrums = new Audio('./public/drums.wav');
const introDrums = new Audio('./public/intro.wav');
console.log(introDrums);

window.addEventListener('load', () => {
  //  prevent user to click on anything
  document.body.style.pointerEvents = 'none';
  // start opacity animation
  body.classList.add('filterOpacity');

  // after animation, 7 secs, allow user to click, which will trigger first intro sound
  setTimeout(() => {
    document.body.style.pointerEvents = 'auto';
    console.log('Unblocked');
    document.addEventListener('click', () => {
      introDrums.play();
    });

    //  once intro ends, start another sound with a flashing animation
    introDrums.addEventListener('ended', () => {
      setTimeout(() => {
        mainDrums.play();
        body.classList.remove('filterOpacity');
        flashFilter(210);
      }, 500);
    });
  }, 7000);
});

//  recursive function
const flashFilter = (count) => {
  if (count <= 0) return;
  if (count % 2 === 0) {
    body.classList.add('filter');
  } else {
    body.classList.remove('filter');
  }
  count--;
  return setTimeout(() => flashFilter(count), 30);
};
