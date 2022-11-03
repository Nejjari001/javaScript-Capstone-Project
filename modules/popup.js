const popupWin = document.getElementById('popup-window');

const getfood = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  fetch(url)
    .then((response) => response.json())
    .then((cat) => {
      cat = cat.meal;
      const div = ` <div class="popup-container">
            <div class="popup-info">
                <div class="close-btn">
                <i id="close" class="fa-solid fa-close fa-2x"></i>
                </div>
                // image div
                <div class="food-img">
                <img  src="${cat.strCategoryThumb}" alt="Food Image">
                </div>
                // Food Name
                <h2 class="food-name">${cat.strCategory}</h2>
                // Food Property
                <div class="food-prop">
                    <div class="left-prop">
                        <ul>
                        <li><strong>ID: ${cat.idCategory}</strong><li>
                        <li><strong>Category: ${cat.strCategory}</strong><li>
                        </ul
                    </div>
                    <div class="right-prop">
                        <ul>
                        <li><strong>Ingredents: ${cat.strTags}</strong><li>
                        <li><strong>Area: ${cat.strArea}</strong><li>
                        </ul
                    </div>
                </div>
                <form class="comment-form">
                    <h2 class"comment-header">Add a Comment<h2>
                    <input type="text" palceholder="Enter Your Name" id="commenter-name">
                    <textarea placeholder="Your Insights"></textarea>
                    <button type="submit">Comment</button>
                </form>
            </div>
        </div>
            `;
      popupWin.innerHTML = div;
      const closeBtn = document.getElementById('close');
      closeBtn.addEventListener('click', () => {
        if (popupWin.style.display !== 'none') {
          popupWin.style.display = 'none';
        }
      });
    });
};

const popupWinShow = (id) => {
  if (popupWin.style.display !== 'block') {
    popupWin.style.display = 'block';
    getfood(id);
  }
};
