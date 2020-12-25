'use strict';

const body = document.querySelector('body');
const modal_container = document.querySelector('.modal_container');
const modal_img = document.querySelector('.modal__image');
const art_page = body.getAttribute('class');
const sidebar = document.querySelector('#sidebar_1970');
const modal_close_btn = document.querySelector('.modal_close_btn ');
const modal__image_container = document.querySelector(
  '.modal__image_container'
);

let scale = 1;

function modalOpen(event) {
  switch (art_page) {
    case 'art_buddhism':
      modal_img.style.width = '30vw';
      break;

    default:
      modal_img.style.width = 'auto';
      modal_img.style.height = '40vw';
      break;
  }

  const target = event.target.getAttribute('modal');
  if (target) {
    modal_img.setAttribute('src', target);
    modal_container.style.visibility = 'visible';
    const scrollLength = modal_container.scrollHeight * 0.2;
    modal_container.scrollTo(0, `${scrollLength}`);
  }
}

function modalClose() {
  if (modal_container.style.visibility === 'visible') {
    modal_container.style.visibility = 'hidden';
  }
  // modal_container.style.visibility = "hidden";
  modal_img.style.transform = 'scale(1)';
}

function blockRightClick(event) {
  event.preventDefault();
  alert('COPYRIGHT ⓒ 한국화가 조춘자, All Rights Reserved.');
}

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.001;
  // Restrict scale
  scale = Math.min(Math.max(1, scale), 2);
  // Apply scale transform
  modal_img.style.transform = `scale(${scale})`;
}

body.addEventListener('click', modalOpen);
modal_close_btn.addEventListener('click', modalClose);
body.addEventListener('contextmenu', blockRightClick);
modal_img.addEventListener('wheel', zoom);
