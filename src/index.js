import getLikes, { addLikes } from '../modules/likes.js';
import render from '../modules/render.js';
// import popupWinShow from '../modules/popup.js';
import './styles.css';

const element = document.querySelector('#container');
const mealUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const likes = await getLikes();
  const storage = [];
  data.categories.forEach((item) => {
    storage.push({
      ...(likes.find((innerItem) => innerItem.item_id.toString() === item.idCategory.toString())),
      ...item,
    });
  });
  return storage;
};

window.onload = async () => {
  const storage = await fetchData(mealUrl);
  render(storage, element);
  const likeButtons = document.querySelectorAll('.fa-heart');
  const likeBtns = Array.from(likeButtons);
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const likeContainer = e.target.parentNode.parentNode.querySelector('.show');
      await addLikes(e.target.id);
      const newVal = +likeContainer.innerHTML + 1;
      likeContainer.innerHTML = newVal;
    });
  });
};

// const commentBtn = Array.from(document.querySelectorAll('#comment'));
// commentBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     popupWinShow(btn.id);
//   });
// });

// popupWinShow();