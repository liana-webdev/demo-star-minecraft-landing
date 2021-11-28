const el = document.querySelector('#module');
const el2 = document.querySelector('#module-2');
const el3 = document.querySelector('#module-3');
const header = document.querySelector('#header');
const body = document.querySelector('#invisible-div');

body.addEventListener('mousemove', (e) => {
  el.style.backgroundPositionX = -e.offsetX / 40 - 110 + 'px';
  el.style.backgroundPositionY = -e.offsetY / 40 - 100 + 'px';
});

body.addEventListener('mousemove', (e) => {
  el2.style.backgroundPositionX = -e.offsetX / 200 + 'px';
  el2.style.backgroundPositionY = -e.offsetY / 200 + 'px';
});

body.addEventListener('mousemove', (e) => {
  el3.style.backgroundPositionX = -e.offsetX / 200 + 'px';
  el3.style.backgroundPositionY = -e.offsetY / 200 + 'px';
});
