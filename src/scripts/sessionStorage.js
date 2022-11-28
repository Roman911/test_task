import { posts, removePosts } from './index'
import { addCard } from './addCard'

const ss = () => {
  let object = {
    posts,
    removePosts
  }
  sessionStorage.setItem('test', JSON.stringify(object));
}

//Записуємо дані в sessionStorage
window.addEventListener("unload", () => {
  ss()
});

//Получаєм дані з sessionStorage
window.addEventListener('DOMContentLoaded', () => {
  const data = sessionStorage.getItem('test');
  const dataParse = JSON.parse(data);

  if (dataParse.posts.length !== 0) {
    for(let i = 0; i < dataParse.posts.length; i++) {
      posts.push(dataParse.posts[i])
      addCard(posts[i])
    }
  }
  
  if (dataParse.removePosts.length !== 0) {
    for(let i = 0; i < dataParse.removePosts.length; i++) {
      removePosts.push(dataParse.removePosts[i])
    }
  }
});