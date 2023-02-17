const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: "popup__input_type_error",
  buttonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled'
}

function disableSubmit(evt) {
  evt.preventDefault();
};

function  enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener ('submit', disableSubmit);
    form.addEventListener ('input', () => {
      toggleButton(form, config);
    });
  
    addInputListeners(form, config);
    toggleButton(form, config);
  })
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const inputId = input.id;
  const error = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    error.textContent = '';
  } else {
    input.classList.add(config.inputErrorClass);
    error.textContent = input.validationMessage;
  }
}

function toggleButton(form, config) {
  const button = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();

  button.disabled = !isFormValid;
  button.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach((item) => {
    item.addEventListener('input', (evt) => {
      handleFormInput(evt, config);
    });
  });
}

enableValidation(formValidationConfig); 

