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

// listGallery.addEventListener("click", (event) => {
//   event.preventDefault();
  let gallery = new SimpleLightbox(".gallery a",{
    captionsData: "alt",
    captionDelay: 250,
   
});  
// });


// ;})

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });
// const lightbox = new SimpleLightbox(listGallery, {
//   captionDelay: 250

// let gallery = new SimpleLightbox('.gallery');
// gallery.on('show.simplelightbox', function () {
//     // do something…
// });})

// const lightbox = new SimpleLightbox({
//     captionDelay: 250,
//     captions: function(event) {
//       return event.getAttribute('alt');
//     }
//   });
//   lightbox.load(gallery.children);})
