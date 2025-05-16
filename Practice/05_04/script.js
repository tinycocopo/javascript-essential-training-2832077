/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

const navMenu = document.querySelector("header");

navMenu.innerHTML = navContent;
