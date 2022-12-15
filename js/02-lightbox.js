import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(galleryItems) {
   return galleryItems.map(({preview,original,description}) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>` ).join('')
}
console.log(galleryItems);

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250
    });

