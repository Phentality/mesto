//Массив с карточками
const initialCards = [
    {
<<<<<<< HEAD
        name: 'Уфа',
        link: 'https://crtrb.ru/uploads/posts/2022-08/2311.jpg'
=======
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
>>>>>>> 8eee1c6cb4315272d5f3b4b8ae6d7278c2b53f6c
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

//Добавление карточек с данными из массива
const cards = document.querySelector('.cards');

initialCards.forEach((element) => {
    const template = document.querySelector('#card').content;
    const cardElement = template.querySelector('.cards__card').cloneNode(true);

    cardElement.querySelector('.cards__text').textContent = element.name;
    cardElement.querySelector('.cards__image').src = element.link;
    cards.append(cardElement);

    const deleteButton = cardElement.querySelector('.cards__delete');
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    })
})

//Попап для изменения профиля
const popupProfile = document.querySelector('#popupProfile');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const popupProfileOpen = document.querySelector('.profile__info-button');
formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_profession');
const profileInfo = document.querySelector('.profile__info');
const profileInfoName = profileInfo.querySelector('.profile__info-name');
const profileInfoProfession = profileInfo.querySelector('.profile__info-profession');

function openPopupProfile () {
    popupProfile.classList.add('popup_opened');

}

function closePopupProfile () {
    popupProfile.classList.remove('popup_opened');
}

popupProfileOpen.addEventListener('click', openPopupProfile);
popupProfileClose.addEventListener('click', closePopupProfile);

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    closePopupProfile();
}

formElement.addEventListener('submit', handleProfileFormSubmit);

//Попап для добавления карточки
const popupAdd = document.querySelector('#popupAdd');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupAddOpen = document.querySelector('.profile__info-addbutton');
secondFormElement = document.querySelector('#popupAdds');
const placeInput = secondFormElement.querySelector('.popup__input_type_place');
const linkInput = secondFormElement.querySelector('.popup__input_type_link');


function openPopupAdd () {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd () {
    popupAdd.classList.remove('popup_opened');
}

popupAddOpen.addEventListener('click', openPopupAdd);
popupAddClose.addEventListener('click', closePopupAdd);

function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const template = document.querySelector('#card').content;
    const cardElement = template.querySelector('.cards__card').cloneNode(true);
    const cardText = cardElement.querySelector('.cards__text');
    const cardImage = cardElement.querySelector('.cards__image');

    cardText.textContent = placeInput.value;
    cardImage.src = linkInput.value;

    cards.prepend(cardElement);
    placeInput.value = '';
    linkInput.value = '';

    const deleteButton = cardElement.querySelector('.cards__delete');
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    })

    closePopupAdd();
};

secondFormElement.addEventListener('submit', handleAddFormSubmit);

//Попап для картинки
const popupImage = document.querySelector('#popupImage');
const popupImageClose = popupImage.querySelector('.popup__close');
const popupImageOpen = document.querySelectorAll('.cards__image');
const popupImageView = popupImage.querySelector('.popup__image')

popupImageOpen.forEach( (el) => {
    el.addEventListener('click', () => {
        popupImage.classList.add('popup_opened');
    });
    popupImageView.src = el.src;
});

function closePopupImage () {
    popupImage.classList.remove('popup_opened');
};

popupImageOpen.addEventListener('click', openPopupImage);
popupImageClose.addEventListener('click', closePopupImage);