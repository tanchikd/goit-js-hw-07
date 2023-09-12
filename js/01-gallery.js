import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallerySet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", gallerySet);
galleryContainer.addEventListener("click", selectGalleryEl);

function selectGalleryEl(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow: () => {
      window.addEventListener("keydown", onKeyEsc);
    },
    onClose: () => {
      window.removeEventListener("keydown", onKeyEsc);
    },
  });

  const onKeyEsc = (e) => {
    console.log(e.code);
    if (e.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
}
