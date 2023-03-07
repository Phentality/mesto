export class FormValidator {
    constructor(config, formSelector) {
        this._form = formSelector;
        this._input = config.inputSelector;
        this._error = config.inputErrorClass;
        this._btn = config.buttonSelector;
        this._ibtn = config.inactiveButtonClass;
    }

    enableValidation() {
        this._form.addEventListener ('input', () => {
            this._toggleButton();
        })
        this._addInputListeners();
        this._toggleButton();
    }

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

    _toggleButton() {
        const button = this._form.querySelector(this._btn);
        const isFormValid = this._form.checkValidity();

        button.disabled = !isFormValid;
        button.classList.toggle(this._ibtn, !isFormValid);
    }

    _addInputListeners() {
        this._form.addEventListener('input', (evt) => {
            this._handleFormInput(evt);
        });
    }
}