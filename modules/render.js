import popupWinShow from './popup.js';

const render = (data, element) => {
  element.innerHTML = '';
  data.forEach((cat) => {
    // <button type="button" id="comment" class="comment">Comments</button>
    // console.log(cat)
    const cardA = document.createElement('div');
    cardA.setAttribute('id', cat.idCategory);
    cardA.classList.add('card-a');

    const btns = document.createElement('div');
    btns.classList.add('btns');

    const commentBtn = document.createElement('button');
    commentBtn.innerText = 'Comment';
    commentBtn.setAttribute('type', 'button');
    commentBtn.setAttribute('id', 'comment');
    commentBtn.classList.add('comment');
    commentBtn.addEventListener('click', () => {
      popupWinShow(cat.strCategory);
    });

    const reserveBtn = document.createElement('button');
    reserveBtn.innerText = 'Reserve';
    reserveBtn.setAttribute('id', 'reserve');
    reserveBtn.setAttribute('type', 'button');
    reserveBtn.classList.add('reserve');

    btns.append(commentBtn, reserveBtn);

    cardA.innerHTML += `
        <img src="${cat.strCategoryThumb}" alt="Picture">
          <div class="space-like">
            <p>${cat.strCategory}</p>
            <i class="fa fa-heart" id=${cat.idCategory} aria-hidden="true"></i>
          </div>
          <div class="like">
            <label for="text" class="show" >${cat.likes || 0}</label>
            <label for="text">Likes</label>
          </div>
          `;
    cardA.append(btns);
    element.append(cardA);
  });
  // const commentBtn = Array.from(document.querySelectorAll('.comment'));
  // commentBtn.forEach((btn) => {
  //   btn.addEventListener('click', () => {
  //     popupWinShow(btn.id);
  //   });
  // });
};
