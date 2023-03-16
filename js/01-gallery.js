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
// const div = document.querySelector(".gallery");
// const linkImgs = galleryItems.map((photo) => {
//   const link = document.createElement("a");
//   link.classList.add("gallery__link");
//   link.href = photo.original;
//   const galleryImgs = document.createElement("img");
//   galleryImgs.classList.add("gallery__image");
//   galleryImgs.src = photo.preview;
//   galleryImgs.dataset.source = link.href;
//   galleryImgs.alt = photo.description;
//   link.append(galleryImgs);
//   return link;
// });
// div.append(...linkImgs);
// div.addEventListener('click', e => {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') return;
//     const largeImageUrl = e.target.dataset.source;
//     const instance = basicLightbox.create(`
//     <img src="${largeImageUrl}" width="800" height="600">
//     `)
    
//     instance.show()
//     });


// const div = document.querySelector('.gallery')
// const img = document.createElement('img')
// galleryItems.forEach(photo =>{
//     img.dataset.src =  photo.original;
//     img.src = photo.preview;
//     img.dataset.alt = photo.description;
// })
// div.append(img)
// img.addEventListener('click', (addImgs)=>{
//     function addImgs(){

//     }})


// const imgs = galleryItems.map((photo)=>{
//     const linkImgs = document.createElement('a')
//     const galleryImgs = document.createElement('img')
//     galleryImgs.classList.add("gallery__image");
//     galleryImgs.src = photo.preview;
//     galleryImgs.dataset.source = photo.original;
//     galleryImgs.dataset.alt = photo.description
//     return galleryImgs
// })
// div.append(...imgs)
// div.addEventListener('click', (event)=>{
//     event.preventDefault();})
// const div = document.querySelector('.gallery');
// const modalWindow = document.querySelector('.modal-window');
// const modalImage = document.querySelector('.modal-window__image');
