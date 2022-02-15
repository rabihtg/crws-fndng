const menuBtn = document.querySelector(".header__nav-menu-btn");
const headerMenu = document.querySelector(".header__nav");
const body = document.querySelector("body");
const bookMarkBtn = document.querySelector(".cta.bookmark");
const bookmarkIcon = document.querySelector(".bookmark-icon");
const modalPledgeItems = document.querySelectorAll(".modal__pledge");
const pledgeInputAmount = document.querySelectorAll(
  ".selected-pledge-input-amount"
);
const modalRadioBtns = document.querySelectorAll(".modal__pledge-radio");
const backProjcectBtn = document.querySelector(".cta.back-project");
const modal = document.querySelector(".modal");
const modalCont = document.querySelector(".modal-cont");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const pledgeRadioBtns = document.querySelectorAll(
  ".modal__pledge.out-of-stock .modal__pledge-radio"
);

pledgeRadioBtns.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("off");
  modalCont.classList.add("off");
  // body.classList.remove("off");
  // body.classList.remove("no-scroll-modal");
});
backProjcectBtn.addEventListener("click", () => {
  modal.classList.remove("off");
  modalCont.classList.remove("off");
  // body.classList.add("off");
  // body.classList.add("no-scroll-modal");
});

pledgeInputAmount.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });
  input.addEventListener("input", (e) => {
    input.textContent = input.textContent.replace(/\r?\n/g, "");
  });
});

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("on");
  headerMenu.classList.toggle("off");
  body.classList.toggle("no-scroll");

  // ignoring width difference
  if (headerMenu.classList.contains("on")) {
    menuBtn.querySelector("use").setAttribute("xlink:href", "#closeIcon");
  } else {
    menuBtn.querySelector("use").setAttribute("xlink:href", "#burgerIcon");
  }
});

bookMarkBtn.addEventListener("click", () => {
  bookMarkBtn.classList.toggle("on");
  bookmarkIcon.classList.toggle("on");
});

modalPledgeItems.forEach((pledge) => {
  pledge.addEventListener("click", () => {
    if (!pledge.classList.contains("out-of-stock")) {
      modalPledgeItems.forEach((pl) => {
        pl.classList.remove("on");
        pl.querySelector("input").checked = false;
        pl.querySelector(".modal__pledge-selected-cont").classList.remove("on");
        pl.querySelector(".modal__pledge-selected-cont").classList.add("off");
      });
      pledge.querySelector("input").checked = true;
      pledge.querySelector(".selected-pledge-input-amount").focus();
      pledge.classList.add("on");
      pledge.querySelector(".modal__pledge-selected-cont").classList.add("on");
      pledge
        .querySelector(".modal__pledge-selected-cont")
        .classList.remove("off");
    }
  });
});
