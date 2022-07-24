window.addEventListener("DOMContentLoaded", function () {
  const navBarList = document.querySelector(".nav-bar__list");
  const navBarItem = document.querySelectorAll(".nav-bar__item");
  const navBtnOpen = document.querySelector(".nav-bar__burger");
  const navBtnClose = document.querySelector(".nav-bar__close");
  const galleryItems = document.querySelectorAll(".gallery__item");
  const galleryNextBtn = document.querySelector(".control__next");
  const galleryPrevBtn = document.querySelector(".control__prev");

  function toggleNavBar(menu, className) {
    menu.classList.toggle(className);
  }

  let i = 0;

  function galleryNextItem(items, activeClass) {
    console.log(i);
    if (i < items.length - 1) {
      items[i].classList.remove(activeClass);
      items[i + 1].classList.add(activeClass);
      i++;
    } else {
      items[items.length - 1].classList.remove(activeClass);
      items[0].classList.add(activeClass);
      i = 0;
    }
  }

  function galleryPrevItem(items, activeClass) {
    console.log(i);
    if (i > 0) {
      items[i].classList.remove(activeClass);
      items[i - 1].classList.add(activeClass);
      i--;
    } else {
      items[0].classList.remove(activeClass);
      items[items.length - 1].classList.add(activeClass);
      i = items.length - 1;
    }
  }

  galleryNextBtn.addEventListener("click", function () {
    galleryNextItem(galleryItems, "gallery__item-active");
  });

  galleryPrevBtn.addEventListener("click", function () {
    galleryPrevItem(galleryItems, "gallery__item-active");
  });

  navBtnOpen.addEventListener("click", function () {
    toggleNavBar(navBarList, "nav-bar__list-active");
  });
  navBtnClose.addEventListener("click", function () {
    toggleNavBar(navBarList, "nav-bar__list-active");
  });
  navBarItem.forEach((item) => {
    item.addEventListener("click", () => {
      toggleNavBar(navBarList, "nav-bar__list-active");
    });
  });
});
