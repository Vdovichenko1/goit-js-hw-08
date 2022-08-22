// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
            </a>
            </div>`;
    })
    .join('');
}

const galItem = createGalleryItems(galleryItems);

galleryContainer.innerHTML = galItem;

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
