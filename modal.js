"use strict";

const body = document.querySelector("body");
const modal_container = document.querySelector(".modal_container");
const modal_img = document.querySelector(".modal__image");
const art_page = body.getAttribute("class");
const sidebar = document.querySelector("#sidebar_1970");

function modalOpen(event) {
  switch (art_page) {
    case "art_buddhism":
      modal_img.style.width = "30vw";
      break;

    default:
      modal_img.style.width = "auto";
      modal_img.style.height = "40vw";
      break;
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

function blockRightClick(event) {
  event.preventDefault();
  alert("COPYRIGHT ⓒ 한국화가 조춘자, All Rights Reserved.");
}

body.addEventListener("click", modalOpen);
modal_container.addEventListener("click", modalClose);
body.addEventListener("contextmenu", blockRightClick);
