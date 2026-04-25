function generateCard() {
  let name = document.getElementById("nameInput").value;

  if (name === "") {
    alert("Enter a name!");
    return;
  }

  document.getElementById("message").innerHTML =
  "Happy Birthday 🎂<br>" + name;

  let book = document.getElementById("book");
  book.style.display = "block";

  // Click to open book
  book.onclick = () => {
    book.classList.toggle("open");
  };
}
// create balloons
const balloonContainer = document.querySelector(".balloons");

for (let i = 0; i < 15; i++) {
  let balloon = document.createElement("span");
  balloon.style.left = Math.random() * 100 + "%";
  balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
  balloonContainer.appendChild(balloon);
}