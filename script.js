const colors = [
  { name: "Light Gray", code: "rgb(246, 246, 250)", count: 0 },
  { name: "Blue", code: "rgb(143, 170, 199)", count: 0 },
  { name: "Green", code: "rgb(189, 196, 102)", count: 0 },
  { name: "Yellow", code: "rgb(244, 208, 116)", count: 0 }
];

const colorBox = document.getElementById("colorBox");
const counters = document.getElementById("counters");

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  colorBox.style.backgroundColor = selectedColor.code;
  selectedColor.count++;
  updateCounters();
}

function updateCounters() {
  counters.innerHTML = "";
  colors.forEach(color => {
    const item = document.createElement("li");
    item.textContent = `${color.name}: ${color.count}`;
    counters.appendChild(item);
  });
}

function startColorChanger() {
  intervalId = setInterval(changeColor, 2000);
}

function stopColorChanger() {
  clearInterval(intervalId);
}

// Start button click event listener
document.getElementById("startButton").addEventListener("click", startColorChanger);

// Stop button click event listener
document.getElementById("stopButton").addEventListener("click", stopColorChanger);

// Initial start of the color changer
startColorChanger();


  // Flash effect
function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  
  // Flash effect
  colorBox.style.backgroundColor = '#000000'; // White color
  setTimeout(() => {
    colorBox.style.backgroundColor = selectedColor.code; // Revert back to the randomly selected color
  }, 100); // Adjust the duration of the flash (in milliseconds)
  
  selectedColor.count++;
  updateCounters();
}



