class Closet {
  constructor(
    // Defines parameters:
    name,
    location,
    height,
    width,
    depth,
    shoeRack,
    isDoorOpen,
    coats
  ) {
    // Define properties:
    this.name = name;
    this.location = location;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.shoeRack = shoeRack;
    this.isDoorOpen = isDoorOpen;
    this.coats = coats;
  }
  // Add methods like normal functions:
  useDoor(doorStatus) {
    this.isDoorOpen = doorStatus;
  }
}

export default Closet;
