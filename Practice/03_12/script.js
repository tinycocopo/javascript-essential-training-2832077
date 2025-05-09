/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Closet from "./Closet.js";

const hallCloset = new Closet(
  "Front hall closet",
  "Front hall",
  8,
  6,
  4,
  [
    "tennisShoes",
    "sandals",
    "winterBoots",
    "dressShoes",
    "loafers",
    "rainBoots",
    "umbrella",
  ],
  true,
  ["lightJacket", "winterJacket", "rainJacket"]
);

console.log("The hallCloset object:", hallCloset);
console.log("Is the door open?", hallCloset.isDoorOpen);

const bedroomCloset = new Closet(
  "Coco's closet",
  "Bedroom",
  10,
  10,
  3,
  ["vansFloral", "vansSkull", "vansRainbow", "lukeSkywalkerBoots"],
  false,
  ["hoodieJacket", "cardigan", "buttonupPlaid", "buttonupImperial"]
);

console.log("the bedroomCloset object:", bedroomCloset);
console.log(
  "Which shoes does Coco have in her closet?",
  bedroomCloset.shoeRack
);

const hallClosetTwo = new Closet(
  "Bathroom hall closet",
  "Bedroom hallway",
  7,
  2,
  2,
  "None",
  false,
  "None"
);

console.log("the hallClosetTwo object:", hallClosetTwo);
console.log(
  "Are there any shoes in the",
  hallClosetTwo.name,
  "?",
  hallClosetTwo.shoeRack
);
