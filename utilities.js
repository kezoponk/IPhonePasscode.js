// Usefull functions
function view(id, value) {
  // element id, value=none, block, flex....
  document.getElementById(id).style.display = value;
}


/*
 * Get mouse position
 *
 * ADD TO BODY : onmousemove="showCoords(event)"
*/
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  //console.log(coords);
}





// Animations

/*
 * Make item follow / face mouse
*/
function accelerate(type, color1, color2) {
  var x = document.createElement("div");
  x.style.height = "100%";
  x.style.width = "100%";
  x.style.background = color1;
  x.style.position = "absolute";

  var y = document.createElement("div");
  y.style.height = "100%";
  y.style.width = "100%";
  y.style.background = color2;
  y.style.position = "absolute";
  document.body.appendChild(x);
  document.body.appendChild(y);

  countAccelerate++;

  var accelerate1 = document.getElementsByClassName('accelerate1')[0];
  var accelerate2 = document.getElementsByClassName('accelerate2')[0];

  if(countAccelerate==1) {
    accelerate1.style.left = "100%";
    accelerate2.style.left = "100%";
  } else {
    accelerate1.style.left = "-350%";
    accelerate2.style.left = "-500%";
  }
  accelerate1.style.transition = "left 1s ease-in";
  accelerate2.style.transition = "left 1.2s ease-in";

  /*
  setTimeout(

  document.body.parentNode.removeChild(y);
  document.body.parentNode.removeChild(x);)
  */
}


/*
 * Resize element
 * ADD TO TARGET ELEMENT : id="main" onmousedown="mouseDown()" onmouseup="mouseUp()" onmousemove="mouseMove()"
 */
var currentY;
var currentX;

function mouseDown() {
  currentY = event.clientY;
  currentX = event.clientX;
}
function mouseUp() {
  currentY = "x";
  currentX = "x";
}

function mouseMove() {
  var main = document.getElementById('main');

  var y = (event.clientY - currentY) + currentY -20;
  var x = (event.clientX - currentX) + currentX +30;

  main.style.height = y+"px";
  main.style.width = x+"px";
  //main.style.transition = "height s linear";
  console.log("X coords: " + x + ", Y coords: " + y);
}
