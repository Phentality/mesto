let popup = document.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');
let popupOpen = document.querySelector('.profile__info-button');

function openPopup () {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

let save = popup.querySelector('.popup__save');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__profession');

function savePopup () {
    nameInput.textContent()
}

















/*function handleFormSubmit (evt) {
    evt.preventDefault();
    nameInput = nameInput.value;
    jobInput = jobInput.value;
    
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', handleFormSubmit); */