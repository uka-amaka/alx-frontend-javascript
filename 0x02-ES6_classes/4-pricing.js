class Currency {
    constructor(code, name) {
    this._code = typeof code === 'string' ? code : '';
    this._name = typeof name === 'string' ? name : '';
    }

  // Getter for code
    get code() {
    return this._code;
    }

  // Setter for code
    set code(newCode) {
    if (typeof newCode === 'string') {
        this._code = newCode;
    } else {
        console.error('Invalid type for code. Expected string.');
    }
    }

  // Getter for name
    get name() {
    return this._name;
    }

  // Setter for name
    set name(newName) {
    if (typeof newName === 'string') {
        this._name = newName;
    } else {
        console.error('Invalid type for name. Expected string.');
    }
    }

  // Method to display full currency information
    displayFullCurrency() {
    return `${this._name} (${this._code})`;
    }
}
