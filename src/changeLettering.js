export default text => {
  const splittedText = text.toLowerCase().split("");
  let changedLettering = splittedText
    .map(
      (letter, index) =>
        index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
  return changedLettering;
};

// Reusable function in other components. You can easily unit test this function.
