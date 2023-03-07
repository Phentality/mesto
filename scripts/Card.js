//Импортируем функцию и переменные нужны для открытия попапа картинки
import { openPopup, popupImage, popupImageView, popupName } from './index.js';

export class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
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
        this._setEventListeners();
        this._element.querySelector('.cards__text').textContent = this._name;
        this._element.querySelector('.cards__image').src = this._link;
        this._element.querySelector('.cards__text').alt = this._name;

        return this._element;
    }
//Обработчик открытия попапа
    _handleOpenPopup() {
        openPopup(popupImage);
        popupImageView.src = this._link;
        popupImageView.alt = this._name;
        popupName.textContent = this._name;
      }
//Обработчик "Лайка"    
    _handleLikeButton() {
        const likeButton = this._element.querySelector('.cards__like-btn');
        likeButton.classList.toggle('cards__like');
        likeButton.classList.toggle('cards__like_active');
    }
//Обработчик "Урныф"
    _handleDeleteButton() {
        this._element.remove();
    }
//Навесили обработчики
    _setEventListeners() {
        this._element.querySelector('.cards__image').addEventListener('click', () => {
          this._handleOpenPopup();
        });

        this._element.querySelector('.cards__like').addEventListener('click', () => {
            this._handleLikeButton();
        });

        this._element.querySelector('.cards__delete').addEventListener('click', () => {
            this._handleDeleteButton();
        });
      } 
}