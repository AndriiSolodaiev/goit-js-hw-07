import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems))

list.addEventListener("click", onListClick);

function createGalleryItemsMarkup(galleryItems) {
   return galleryItems.map(({preview,original,description}) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>` ).join('')
}
console.log(galleryItems);


function onListClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250
    });
    lightbox.on('show.simplelightbox', function () {
});

}
