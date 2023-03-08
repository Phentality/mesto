export class FormValidator {
    constructor(config, formSelector) {
        this._form = formSelector;
        this._input = config.inputSelector;
        this._error = config.inputErrorClass;
        this._btn = config.buttonSelector;
        this._ibtn = config.inactiveButtonClass;
        this._submitButton = this._form.querySelector(this._btn);
    }
//Метод активации валидации
    enableValidation() {
        this._form.addEventListener ('input', () => {
            this.toggleButton();
        })
        this._addInputListeners();
        this.toggleButton();
    }
//Метод добавления ошибки инпута
    _handleFormInput(evt) {
        const input = evt.target;
        const inputId = input.id;
        const error = document.querySelector(`#${inputId}-error`);

        if (input.validity.valid) {
            input.classList.remove(this._error);
            error.textContent = '';
        } else {
            input.classList.add(this._error);
            error.textContent = input.validationMessage;
        }
    }
//Метод переключения кнопки
    toggleButton() {
        const isFormValid = this._form.checkValidity();

        this._submitButton.disabled = !isFormValid;
        this._submitButton.classList.toggle(this._ibtn, !isFormValid);
    }
//Навешиваем обработчики
    _addInputListeners() {
        this._form.addEventListener('input', (evt) => {
            this._handleFormInput(evt);
        });
    }
}