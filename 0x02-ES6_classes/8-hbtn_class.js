class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : 0;
    this._location = typeof location === 'string' ? location : '';
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Behavior when class is cast into a number
  valueOf() {
    return this._size;
  }

  // Behavior when class is cast into a string
  toString() {
    return this._location;
  }
}
