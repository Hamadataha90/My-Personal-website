// const modeSwitcherButton = document.getElementById('mode-switcher');
// const body = document.body;

// modeSwitcherButton.addEventListener('click', () => {
//   if (body.classList.contains('night-mode')) {
//     body.classList.remove('night-mode');
//     modeSwitcherButton.textContent = 'Night Mode';
//   } else {
//     body.classList.add('night-mode');
//     modeSwitcherButton.textContent = 'Day Mode';
//   }
// });




// Get the button element
const modeToggleBtn = document.querySelector('#mode-toggle');

// Listen for click events on the button
modeToggleBtn.addEventListener('click', () => {
  // Get the body element
  const body = document.querySelector('body');
  // Toggle the "night-mode" class on the body element
  body.classList.toggle('night-mode');
  // Update the button text
  if (body.classList.contains('night-mode')) {
    modeToggleBtn.textContent = 'Day Mode';
  } else {
    modeToggleBtn.textContent = 'Night Mode';
  }
});


