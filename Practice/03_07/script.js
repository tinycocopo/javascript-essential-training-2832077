/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const closet = {
  name: "Front hall closet",
  location: "Front hall",
  height: 9,
  width: 6,
  depth: 4,
  isDoorOpen: false,
  openDoor() {
    this.isDoorOpen = true;
    console.log("The door is open!");
  },
  closeDoor() {
    this.isDoorOpen = false;
    console.log("The door is closed!");
  },
  shoeRack: {
    shoes: [
      "tennisShoes",
      "sandals",
      "winterBoots",
      "dressShoes",
      "loafers",
      "rainBoots",
    ],
    umbrella: "umbrella",
  },
  coats: ["lightJacket", "winterJacket", "rainJacket"],
};
