const grids = document.querySelectorAll(".grid");
const headings = document.querySelectorAll(
  ".heading .heading__wrapper .heading__text"
);

const enterScreen = (index) => {
  const grid = grids[index];
  const heading = headings[index];
  console.log(headings);
  const gridColumns = grid.querySelectorAll(".column");

  grid.classList.add("grid__active");
  gridColumns.forEach((element) => {
    element.classList.remove("animate-before");
  });
  heading.classList.remove("animate-before");
};
const exitScreen = (index, exitDeelay) => {};

const setupAnimationCycle = (initialScreenIndex, timePerScreen, exitDeelay) => {
  enterScreen(0);
};

setupAnimationCycle(0, 2000, 200 * 7);
