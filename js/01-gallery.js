import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const div = document.querySelector('.gallery')
const structure = galleryItems.reduce((acc,element)=>{
     let markup= acc+(`<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
  </li>`)
  return markup
},'')
div.insertAdjacentHTML('afterbegin', structure)
div.addEventListener('click', (event)=>{
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1400" height="900">
    `)
     instance.show()
    });

