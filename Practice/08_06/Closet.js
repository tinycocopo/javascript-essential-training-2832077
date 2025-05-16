class Closet {
  constructor(
    // Defines parameters:
    name,
    location,
    height,
    width,
    length,
    volume,
    shoeRack,
    isDoorOpen,
    coats
  ) {
    // Define properties:
    this.name = name;
    this.location = location;
    this.height = height;
    this.width = width;
    this.length = length;
    this.volume = volume;
    this.shoeRack = shoeRack;
    this.isDoorOpen = isDoorOpen;
    this.coats = coats;
  }
  // Add methods like normal functions:
  useDoor(doorStatus) {
    this.isDoorOpen = doorStatus;
    return doorStatus;
  }

  // Add method to push new shoes to shoeRack
  addNewShoes(shoes) {
    // Ensure shoeRack is an array (in case it was modified)
    if (!Array.isArray(this.shoeRack)) {
      this.shoeRack = [];
    }
    this.shoeRack.push(shoes);
    return shoes;
  }

  // Add a method to convert "isDoorOpen" answers to "yes" and "no"
  convertBooleanToYN() {
    return this.isDoorOpen ? "Yes" : "No";
  }

  // A volume calculator
  volumeCalculator() {
    this.volume = this.length * this.width * this.height;
    return this.volume;
  }
}

export default Closet;
