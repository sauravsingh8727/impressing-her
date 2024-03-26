document.querySelector("#move").addEventListener("mouseenter", function (e) {
  let m = e.target;
  m.style.position = "absolute";
  m.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  m.style.left = Math.floor(Math.random() * 90 + 5) + "%";
});
