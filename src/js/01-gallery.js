// ----------- SimpleLightboxLibrary---------------
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// ------------------------------------------------
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

function createGalalery(arr) {
  const galleryStr = arr
    .map(
      ({ preview, original, description }) =>
        `  
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"        
        alt="${description}"        
      />
    </a>
`
    )
    .join('');
  galleryBox.insertAdjacentHTML('beforeend', galleryStr);
}

createGalalery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
