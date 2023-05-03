
let stars = document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river =document.getElementById('river');
let boat =document.getElementById('boat');
let nouvil =document.querySelector('.nouvil');

window.onscroll = function name(params) {
    let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value * 4 + 'px';
mountains3.style.top = value * 2 + 'px';
mountains4.style.top = value * 1.5 + 'px';
river.style.top = value  + 'px';
boat.style.top = value  + 'px';
boat.style.left = value * 2 + 'px';
nouvil.style.fontSize = value + 'px';
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
}













































