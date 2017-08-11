document.getElementById('stopButton').onclick = Red;
document.getElementById('slowButton').onclick = Yellow;
document.getElementById('goButton').onclick = Green;

function Red() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function Yellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function Green() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}