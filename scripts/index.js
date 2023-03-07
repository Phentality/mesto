//Импортируем классы
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
//Переменные для форм
const addFormElement = document.querySelector('#popupAdds');
const editFormElement = document.querySelector('#popupEdit');
//Переменные темплейта
const template = document.querySelector('#card').content;
//Переменные для вставки карточек
const cards = document.querySelector('.cards');
//Переменные общие для попапов
const closeButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup')
//Переменные для попапа профиля
const popupProfile = document.querySelector('#popupProfile');
const popupProfileOpen = document.querySelector('.profile__info-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_profession');
const profileInfo = document.querySelector('.profile__info');
const profileInfoName = profileInfo.querySelector('.profile__info-name');
const profileInfoProfession = profileInfo.querySelector('.profile__info-profession');
//Переменные для попапа добавления карточки
const popupAdd = document.querySelector('#popupAdd');
const popupAddOpen = document.querySelector('.profile__info-addbutton');
const secondFormElement = document.querySelector('#popupAdds');
const placeInput = secondFormElement.querySelector('.popup__input_type_place');
const linkInput = secondFormElement.querySelector('.popup__input_type_link');
//Переменные для попапа с картинками 
export const popupImage = document.querySelector('#popupImage');//Попап на картинку
export const popupImageView = popupImage.querySelector('.popup__image');
export const popupName = popupImage.querySelector('.popup__name');
//Массив с карточками
const initialCards = [
    {
        name: 'Уфа',
        link: 'https://images.unsplash.com/photo-1651509794867-2ddb4729f1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

//Добавляем все карточки из массива
initialCards.forEach((element) => {
    const place = element.name;
    const link = element.link;
    const card = new Card(place, link, '.cards__template');
    const cardElement = card.generateCard();
    cards.append(cardElement);
});
//Общее закрытие и открытие попапа
//Хороший пример для чего нужно удалять обработчик D:
function closeByEscape(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
//Открыли попап + обработчик Escape
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
};
//Закрыли попап + обработчик Escape
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
};
//Функция закрытия через оверлей
function closeOverlayPopup(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === popup) {
            closePopup(popup);
        }
    })
}
//Навесили на каждый попап
popups.forEach((popup) => {
    closeOverlayPopup(popup);
});
//Общий обработчик для все крестиков попапа
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Попап для изменения профиля
//Функция для открытия попапа профиля, с возможностью взятия информации со страницы
function openPopupProfile () {
    openPopup(popupProfile);
    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoProfession.textContent;
};
//Навесили обработчик
popupProfileOpen.addEventListener('click', openPopupProfile);
//Функция для изменения информации на странице
function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    closePopup(popupProfile);
};
//Навесили обработчик
formElement.addEventListener('submit', handleProfileFormSubmit);

//Попап для добавления карточки
//Функция для деактивации кнопки при каждом новом открытии попапа
function openPopupAddDisabled() {
    const button = popupAdd.querySelector('.popup__button');
    button.classList.add('popup__button_disabled');
    button.disabled = placeInput.value === '' && linkInput.value === '';
}
//Функция открытия попапа добавления карточки
function openPopupAdd () {
    openPopup(popupAdd);
    if (placeInput.value === '' && linkInput.value === '') {
        openPopupAddDisabled();
    };
};
//Навесили обработчик
popupAddOpen.addEventListener('click', openPopupAdd);
//Функция рендера карточки
function renderCard(place, link) {
    const card = new Card(place, link, '.cards__template');
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
}
//Функция для добавления карточки
function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const place = placeInput.value;
    const link = linkInput.value;
    renderCard(place, link);
    placeInput.value = '';
    linkInput.value = '';
    closePopup(popupAdd);
};
//Навесили обработчик
secondFormElement.addEventListener('submit', handleAddFormSubmit);
//Config для валидации форм
const formValidationConfig = {
    inputSelector: '.popup__input',
    inputErrorClass: "popup__input_type_error",
    buttonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled'
  }
//Для каждой формы свой экземпляр класса
new FormValidator(formValidationConfig, addFormElement).enableValidation();
new FormValidator(formValidationConfig, editFormElement).enableValidation();


