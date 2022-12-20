class Airport {
  #capacity;
  #inAirport = [];

  constructor(capacity = 5) {
    this.#capacity = capacity;
  }

  addToInAirport(plane) {
    this.#inAirport.push(plane);
  }

  instructToLand(plane) {
    if (this.isFull()) {
      return "airport full - cannot land";
    } else if (plane.isLanded()) {
      return "plane not flying - cannot be landed";
    } else {
      plane.land();
      this.addToInAirport(plane);
      return "plane landed";
    }
  }

  isFull() {
    if (this.#inAirport.length < this.#capacity) {
      return false;
    } else {
      return true;
    }
  }

  isInAirport(plane) {
    for (let i = 0; i < this.#inAirport.length; i++) {
      if (this.#inAirport[i].getPlaneId() === plane.getPlaneId()) {
        return true;
      }
    }
    return false;
  }

  instructToTakeOff(plane) {
    if (this.isInAirport(plane)) {
      plane.takeOff();
      this.removeFromInAirport(plane);
      return "plane left airport";
    } else {
      return "plane not in airport";
    }
  }

  getCapacity() {
    return this.#capacity;
  }

  getInAirport() {
    return this.#inAirport;
  }

  removeFromInAirport(plane) {
    const originalLength = this.#inAirport.length;
    this.#inAirport = this.#inAirport.filter(
      (item) => item.getPlaneId() !== plane.getPlaneId()
    );
    if (this.#inAirport.length < originalLength) {
      return true;
    } else {
      return false;
    }
  }

  setCapacity(number) {
    this.#capacity = number;
  }
}

module.exports = Airport;
