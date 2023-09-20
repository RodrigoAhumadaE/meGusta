function addLikes(element){
  let elementComentLike = element.closest('.header').querySelector('.num-like');
  let numLike = elementComentLike.innerText;
  numLike++;
  elementComentLike.textContent = numLike;
}