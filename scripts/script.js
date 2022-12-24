let popup = document.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');
let popupOpen = document.querySelector('.profile__info-button');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__profession');
let formSave = formElement.querySelector('.popup__save');
let profileInfo = document.querySelector('.profile__info');
let profileInfoName = profileInfo.querySelector('.profile__info-name');
let profileInfoProfession = profileInfo.querySelector('.profile__info-profession');

function openPopup () {
    popup.classList.add('popup_opened');

}

function closePopup () {
    popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function savePopup () {
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    closePopup();
}

formSave.addEventListener('click', savePopup);

/*function handleFormSubmit (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit); */
