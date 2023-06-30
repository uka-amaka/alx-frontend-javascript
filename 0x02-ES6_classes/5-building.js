import Currency from './3-currency.js';

class Pricing {
    constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : 0;
    this._currency = currency instanceof Currency ? currency : new Currency('', '');
    }

  // Getter for amount
    get amount() {
    return this._amount;
    }

  // Setter for amount
    set amount(newAmount) {
    if (typeof newAmount === 'number') {
        this._amount = newAmount;
    } else {
        console.error('Invalid type for amount. Expected number.');
    }
    }

  // Getter for currency
    get currency() {
    return this._currency;
    }

  // Setter for currency
    set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
        this._currency = newCurrency;
    } else {
        console.error('Invalid type for currency. Expected Currency object.');
    }
    }

  // Method to display full price information
    displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

  // Static method to convert price
    static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
        console.error('Invalid types for amount or conversionRate. Expected numbers.');
    }
    }
}

export default Pricing;
