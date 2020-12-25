"use strict";

const body = document.querySelector("body");

function moreBtnHandler(event) {
  const target_class = event.target.getAttribute("class");

  if (target_class === "review_container__more") {
    const more_btn = event.target.getAttribute("id");

    let review;
    switch (more_btn) {
      case "more_btn_1":
        review = document.getElementById("more_review_1");
        changeHeight(review, more_btn);
        break;

      case "more_btn_2":
        review = document.getElementById("more_review_2");
        changeHeight(review, more_btn);
        break;

      case "more_btn_3":
        review = document.getElementById("more_review_3");
        changeHeight(review, more_btn);
        break;

      case "more_btn_4":
        review = document.getElementById("more_review_4");
        changeHeight(review, more_btn);
        break;
    }
  }
}

function changeHeight(review, more_btn) {
  if (review.style.height === "fit-content") {
    review.style.height = "2vw";
    document.getElementById(more_btn).innerHTML = "전문보기";
  } else {
    review.style.height = "fit-content";
    document.getElementById(more_btn).innerHTML = "닫기";
  }
}

body.addEventListener("click", moreBtnHandler);
