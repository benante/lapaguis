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
  setTimeout(() => {
    document.body.style.pointerEvents = 'auto';
    console.log('Unblocked');
    document.addEventListener('click', () => {
      introDrums.play();
    });
    introDrums.addEventListener('ended', () => {
      setTimeout(() => {
        mainDrums.play();
        body.classList.remove('filterOpacity');
        toggleFilter(210, 30);
      }, 500);
    });
  }, 7000);
  //   document.addEventListener('click', blockInteractions, false);
});

function toggleFilter(times, interval) {
  let count = 0;

  function toggleFilter() {
    if (count >= times) return; // Stop after the desired number of alternations

    if (count % 2 === 0) {
      body.classList.add('filter');
    } else {
      body.classList.remove('filter');
    }

    count++;
    setTimeout(toggleFilter, interval); // Schedule the next toggle
  }

  toggleFilter(); // Start the toggling process
}
