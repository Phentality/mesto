export class Card {
    constructor(name, link, templateSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
//Берём темплейт(или грубо создаём его)
    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.cards__card')
          .cloneNode(true);
      
        return cardElement;
      }
//Создаём карточку из полученного темплейта
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.cards__image');
        this._likeButton = this._element.querySelector('.cards__like-btn');
        this._deleteButton = this._element.querySelector('.cards__delete');
        this._setEventListeners();
        this._element.querySelector('.cards__text').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element;
    }
//Обработчик "Лайка"    
    _handleLikeButton() {
        this._likeButton.classList.toggle('cards__like');
        this._likeButton.classList.toggle('cards__like_active');
    }
//Обработчик "Урны"
    _handleDeleteButton() {
        this._element.remove();
    }
//Навесили обработчики
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton();
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteButton();
        });
      } 
}