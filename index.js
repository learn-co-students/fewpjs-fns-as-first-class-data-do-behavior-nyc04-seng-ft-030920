/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const hour = parseInt(string, 10)
  if (hour < 12) return "Good Morning"
  if (hour >= 12 && hour <= 15) return "Good Afternoon"
  return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(TEST) {
document.getElementById('greeting').innerText = "TEST"; 
}