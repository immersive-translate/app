let start = Date.now();
document.addEventListener("keydown", function (event) {
  const diff = Date.now() - start;
  start = Date.now();
  console.log(`You pressed the ${event.key} key`, diff);
});
