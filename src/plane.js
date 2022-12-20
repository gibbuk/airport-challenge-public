class Plane {
  #state = "";
  #planeId;

  constructor(planeId = "noID") {
    this.#planeId = planeId;
  }

  getPlaneId() {
    return this.#planeId;
  }

  getState() {
    return this.#state;
  }

  isLanded() {
    if (this.#state === "landed") {
      return true;
    } else {
      return false;
    }
  }

  land() {
    this.#state = "landed";
  }

  takeOff() {
    this.#state = "flying";
  }
}

module.exports = Plane;
