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




// // Get the button element
// const modeToggleBtn = document.querySelector('#mode-toggle');

// // Listen for click events on the button
// modeToggleBtn.addEventListener('click', () => {
//   // Get the body element
//   const body = document.querySelector('body');
//   // Toggle the "night-mode" class on the body element
//   body.classList.toggle('night-mode');
//   // Update the button text
//   if (body.classList.contains('night-mode')) {
//     modeToggleBtn.textContent = 'Day Mode';
//   } else {
//     modeToggleBtn.textContent = 'Night Mode';
//   }
// });





let stars = document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river =document.getElementById('river');
let boat =document.getElementById('boat');
let nouvil =document.querySelector('.nouvil');
let full =document.querySelector('.full');

window.onscroll = function name(params) {
    let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value * 4 + 'px';
mountains3.style.top = value * 2 + 'px';
mountains4.style.top = value * 1.5 + 'px';
river.style.top = value  + 'px';
boat.style.top = value  + 'px';
boat.style.left = value * 1.5 + 'px';
nouvil.style.fontSize = value + 'px';
full.style.fontSize = value + 'px';
if (scrollY >= 85) {
    nouvil.style.fontSize = 85 + 'px';
    nouvil.style.position = 'fixed';
    if (scrollY >= 311) {
        nouvil.style.display = 'none';
    }else{
        nouvil.style.display = 'block';
}
}
if (scrollY >= 73) {
    document.querySelector('.main').style.background = 'linear-gradient(#35afb2,#34023e)';
}else{
    document.querySelector('.main').style.background = 'linear-gradient(#31011e,transparent)';

}
if (scrollY >= 54) {
  full.style.fontSize = 54 + 'px';
  full.style.position = 'fixed';
    if (scrollY >= 311) {
      full.style.display = 'none';
    }else{
      full.style.display = 'block';
}
}
if (scrollY >= 73) {
    document.querySelector('.main').style.background = 'linear-gradient(#35afb2,#34023e)';
}else{
    document.querySelector('.main').style.background = 'linear-gradient(#31011e,transparent)';

}


}





































































