/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timeStr = time.split(':');
  let hrInt = parseInt(timeStr[0]);

  if (hrInt > 17) {
    return "Good Evening";
  } else if (hrInt > 12) {
    return "Good Afternoon";
  } else {
    return "Good Morning";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let greet = document.querySelector('#greeting');
  greet.innerText = message;
}
