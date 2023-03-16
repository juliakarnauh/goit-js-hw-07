import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const listGallery = document.querySelector(".gallery");
const structure = galleryItems.reduce((acc, element) => {
  let markup =
    acc +
    `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
  </li>`;
  return markup;
}, "");

listGallery.insertAdjacentHTML("afterbegin", structure);


  let gallery = new SimpleLightbox(".gallery a",{
    captionsData: "alt",
    captionDelay: 250,
   
});  
