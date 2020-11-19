"use strict";

const body = document.querySelector("body");
const modal_container = document.querySelector(".modal_container");
const modal_img = document.querySelector(".modal__image");
const art_page = body.getAttribute("class");

function modalOpen(event) {
  if (art_page === "art_buddhism") {
    modal_img.style.width = "30vw";
  }

  const target = event.target.getAttribute("modal");
  if (target) {
    modal_img.setAttribute("src", target);
    modal_container.style.visibility = "visible";
  }
}

function modalClose() {
  modal_container.style.visibility = "hidden";
}

body.addEventListener("click", modalOpen);
modal_container.addEventListener("click", modalClose);
