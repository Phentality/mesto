let popup = document.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');
let popupOpen = document.querySelector('.profile__info-button');
formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_profession');
let profileInfo = document.querySelector('.profile__info');
let profileInfoName = profileInfo.querySelector('.profile__info-name');
let profileInfoProfession = profileInfo.querySelector('.profile__info-profession');

function openPopup () {
    popup.classList.add('popup_opened')
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;

}

function closePopup () {
    popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

