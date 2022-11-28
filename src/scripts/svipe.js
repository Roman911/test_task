import { posts } from './index';
import { newCard, fill } from './addCard';

const list = document.querySelector('.grid');

let touchstartX = 0;
let touchendX = 0;

let i = 1;
let count = 1;

let position = 0; // положение ленты прокрутки

const next = () => {
  const windowInnerWidth = document.documentElement.clientWidth;
  
  // сдвиг вправо
  position -= windowInnerWidth;
  if(fill) {
    count = 0
  } else {
    count = 1
  }
  position = Math.max(position, -windowInnerWidth * (posts.length - count));
  list.style.marginLeft = position + 'px';
  i++

  if(i > posts.length && fill) {
    newCard()
  }
}

const prev = () => {
  const windowInnerWidth = document.documentElement.clientWidth;
  // сдвиг влево
  position += windowInnerWidth;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
}

const checkDirection = () => {
  if (touchendX < touchstartX) {
    next()
  }
  if (touchendX > touchstartX) {
    prev()
  }
}


document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})