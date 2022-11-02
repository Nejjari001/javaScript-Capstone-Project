import popupWinShow from './popup.js';

const render = (data, element) => {
  element.innerHTML = '';
  data.forEach((cat) => {
    element.innerHTML += `
        <div id="${cat.idCategory}" class="card-a">
        <img src="${cat.strCategoryThumb}" alt="Picture">
          <div class="space-like">
            <p>${cat.strCategory}</p>
            <i class="fa fa-heart" id=${cat.idCategory} aria-hidden="true"></i>
          </div>
          <div class="like">
            <label for="text" class="show" >${cat.likes || 0}</label>
            <label for="text">Likes</label>
          </div>
          <div class="btns">
          <button type="button" id="comment" class="comment">Comments</button>
          <button type="button" id="reserve" class="reserve">Reserve</button>
          </div>
          </div>
          `;
  });
  const commentBtn = Array.from(document.querySelectorAll('.comment'));
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popupWinShow(btn.id);
    });
  });
};

// popupWinShow();
export default render;