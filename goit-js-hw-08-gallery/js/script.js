import {
    galleryItems
  } from "./gallery-items.js";
  
  const galleryList = document.querySelector(".gallery");
  const modal = document.querySelector(".lightbox");
  
  //-----------------добавление изображений-------------------//
  const galleryItem = galleryItems.reduce((allItems, item) => {
    allItems += `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    <span class="gallery__icon">
      <i class="material-icons"></i>
    </span>
  </a>
  </li>
  `;
    return allItems;
  }, "");
  galleryList.insertAdjacentHTML("afterbegin", `${galleryItem}`);

  const modalImage = document.querySelector(".lightbox___image");

  galleryList.addEventListener("click", e => {
    event.preventDefault();
    if (e.target === e.currentTarget) return;
  
    const imageLink = e.target.getAttribute("data-source");
    const imageText = e.target.getAttribute("alt");
    modalImage.setAttribute("src", imageLink);
    modalImage.setAttribute("alt", imageText);
    modal.classList.add("is-open");
  });

  function closeModal() {
    modal.classList.remove("is-open");
    modalImage.setAttribute("src", "");
    modalImage.setAttribute("alt", "");
  }
  
  const modalOverlayClose = document.querySelector(".lightbox__content");
  
  modalOverlayClose.addEventListener("click", e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  });
  
  const modalButtonClose = document.querySelector(
    '[data-action="close-lightbox"]'
  );
  
  modalButtonClose.addEventListener("click", () => {
    closeModal();
  });
  
  galleryList.addEventListener("keyup", e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  });