import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
    super(sqft);
    this._floors = typeof floors === 'number' ? floors : 0;
    }

  // Getter for floors
    get floors() {
    return this._floors;
    }

  // Override the evacuationWarningMessage method
    evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
    }
}

export default SkyHighBuilding;
