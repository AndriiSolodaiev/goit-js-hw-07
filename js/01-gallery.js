import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

list.addEventListener("click", onListClick);


list.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems))

/**
 * 
 * @param {String} event 
 * @returns zoomImg
 */
function onListClick(event) {
    event.preventDefault()
    console.dir(event.target)
    if (event.target.nodeName !== "IMG") {
        return;
    }
const instance = basicLightbox.create(`
		<img width="1140"  src="${event.target.dataset.source}">
	`)
  instance.show();

  list.addEventListener("keydown", onCloseImgEscape)
  function onCloseImgEscape(evt) {
    console.log(evt.code)
    if (evt.code === "Escape") {
      instance.close(() => list.removeEventListener("keydown", onCloseImgEscape))
    }
  }
}

function createGalleryItemsMarkup(galleryItems) {
   return galleryItems.map(({preview,original,description}) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` ).join('')
}

console.log(galleryItems);
