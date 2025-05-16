/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const cell01 = document.querySelector("main.container ul.grid li.cell.cell01");
const cell02 = document.querySelector("main.container ul.grid li.cell.cell02");
const cell03 = document.querySelector("main.container ul.grid li.cell.cell03");
const cell04 = document.querySelector("main.container ul.grid li.cell.cell04");
const cell05 = document.querySelector("main.container ul.grid li.cell.cell05");
const cell06 = document.querySelector("main.container ul.grid li.cell.cell06");
const cell07 = document.querySelector("main.container ul.grid li.cell.cell07");
const cell08 = document.querySelector("main.container ul.grid li.cell.cell08");
const cell28 = document.querySelector("main.container ul.grid li.cell.cell28");

cell01.addEventListener(
  "mouseover",
  () => {
    cell01.classList.add("lavender");
  },
  false
);

cell01.addEventListener(
  "mouseout",
  () => {
    cell01.classList.remove("lavender");
  },
  false
);

cell02.addEventListener(
  "mouseover",
  () => {
    cell02.classList.add("teal");
  },
  false
);

cell02.addEventListener(
  "mouseout",
  () => {
    cell02.classList.remove("teal");
  },
  false
);

cell03.addEventListener(
  "mouseover",
  () => {
    cell03.classList.add("lavender");
  },
  false
);

cell03.addEventListener(
  "mouseout",
  () => {
    cell03.classList.remove("lavender");
  },
  false
);

cell28.addEventListener(
  "mouseover",
  () => {
    cell28.classList.add("teal");
  },
  false
);

cell28.addEventListener(
  "mouseout",
  () => {
    cell28.classList.remove("teal");
  },
  false
);
