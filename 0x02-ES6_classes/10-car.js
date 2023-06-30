const cloneCarSymbol = Symbol('cloneCar');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Set the cloneCar method as a symbol property on the instance
    this[cloneCarSymbol] = this.cloneCar.bind(this);
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}

export default Car;
