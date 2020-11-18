"use strict";

const buddhism_entire = document.querySelector(".buddhism_entire");
const modal_container = document.querySelector(".modal_container");

function modalOpen() {
  modal_container.style.visibility = "visible";
}

function modalClose() {
  modal_container.style.visibility = "hidden";
}
buddhism_entire.addEventListener("click", modalOpen);
modal_container.addEventListener("click", modalClose);

function init() {}

init();
