import { posts, removePosts } from './index';
import { fn } from './addCard';

//Кнопка "Заполнить"
const btnFill = document.querySelectorAll('[data-action="fill"]');
//const btnFillBN = document.querySelector('.bottom-navigation__btn')

//Видаляєм карточку
export const removeCard = (posts, removePosts) => {
  const lastPost = posts.splice(-1, 1);
  removePosts.push(lastPost[0]);
  const removePost = document.querySelector(`[data-id="${lastPost[0].id}"]`);
  removePost.classList.add("opacityNull");
  setTimeout(() => {
    removePost.remove();
  }, 500);
};

//Відслідковуємо клик на "Удалить"
window.addEventListener('click', (event) => {
  if(event.target.dataset.action === "remove") {
    const windowInnerWidth = document.documentElement.clientWidth;
    if (posts.length !== 0) {
      removeCard(posts, removePosts);
    }
  }
});

//Відслідковуємо клик на "Очистить"
window.addEventListener('click', (event) => {
  if(event.target.dataset.action === "clear") {
    const ln = posts.length;
    if (ln > 1) {
      for (let i = 0; i < ln - 1; i++) {
        removeCard(posts, removePosts);
      }
    }
    fn(false);
    btnFill[0].disabled = true;
    btnFill[1].disabled = true;
  }
});