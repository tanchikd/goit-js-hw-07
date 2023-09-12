import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallerySet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"
  />
</a>
</li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", gallerySet);

new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
