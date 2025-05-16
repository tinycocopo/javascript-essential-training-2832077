/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Closet from "./Closet.js";

// Closets
const hallCloset = new Closet(
  "Front hall closet",
  "Front hall",
  8,
  6,
  4,
  0,
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

const doorStatusText = hallCloset.convertBooleanToYN();
console.log(`Is ${hallCloset.name}'s door open? ${doorStatusText}`);

const bedroomCloset = new Closet(
  "Coco's closet",
  "Bedroom",
  10,
  10,
  3,
  0,
  ["vansFloral", "vansSkull", "vansRainbow", "lukeSkywalkerBoots"],
  false,
  ["hoodieJacket", "cardigan", "buttonupPlaid", "buttonupImperial"]
);

bedroomCloset.convertBooleanToYN();

const hallClosetTwo = new Closet(
  "Bathroom hall closet",
  "Bedroom hallway",
  7,
  2,
  2,
  0,
  [],
  false,
  []
);

hallClosetTwo.convertBooleanToYN();

// Actions
console.log("the hallClosetTwo object:", hallClosetTwo);

bedroomCloset.addNewShoes("Tevas");
console.log(bedroomCloset.shoeRack);

// Content
const content = `
    <main>
        <h1>All My Closets</h1>
        <div class="closet">
        <h2>${hallCloset.name}</h2>
        <ul>
          <li>Name: ${hallCloset.name}</li>
          <li>Location: ${hallCloset.location}</li>
          <li>Height: ${hallCloset.height}</li>
          <li>Width: ${hallCloset.width}</li>
          <li>Depth: ${hallCloset.length}</li>
          <li>Volume: ${hallCloset.volumeCalculator()}</li>
          <li>What's in the shoe rack? ${hallCloset.shoeRack.join(", ")}</li>
          <li>Is the door open? ${hallCloset.convertBooleanToYN()}</li>
          <li>Coats: ${hallCloset.coats.join(", ")}</li>
        </ul>
        </div>
        <div class="closet">
        <h2>${bedroomCloset.name}</h2>
        <ul>
          <li>Name: ${bedroomCloset.name}</li>
          <li>Location: ${bedroomCloset.location}</li>
          <li>Height: ${bedroomCloset.height}</li>
          <li>Width: ${bedroomCloset.width}</li>
          <li>Length: ${bedroomCloset.length}</li>
          <li>Volume: ${bedroomCloset.volumeCalculator()}</li>
          <li>What's in the shoe rack? ${bedroomCloset.shoeRack.join(", ")}</li>
          <li>Is the door open? ${bedroomCloset.convertBooleanToYN()}</li>
          <li>Coats: ${bedroomCloset.coats.join(", ")}</li>
        </ul>
        </div>
        <div class="closet">
        <h2>${hallClosetTwo.name}</h2>
        <ul>
          <li>Name: ${hallClosetTwo.name}</li>
          <li>Location: ${hallClosetTwo.location}</li>
          <li>Height: ${hallClosetTwo.height}</li>
          <li>Width: ${hallClosetTwo.width}</li>
          <li>Length: ${hallClosetTwo.length}</li>
          <li>Volume: ${hallClosetTwo.volumeCalculator()}</li>
          <li>What's in the shoe rack? ${hallClosetTwo.shoeRack.join(", ")}</li>
          <li>Is the door open? ${hallClosetTwo.convertBooleanToYN()}</li>
          <li>Coats: ${hallClosetTwo.coats.join(", ")}</li>
        </ul>   
        </div>     
    </main>
`;

document.body.innerHTML = content;
