function myFunction1() {
  document.getElementById("demo").innerHTML  = "Now thats a good cup joe"
}

function myFunction2() {
  var x= document.createElement("IMG");
  x.setAttribute("src", "image/Peter.jpg");
  x.setAttribute("width", "200");
  x.setAttribute("height","200");
  x.setAttribute("alt", "Peter");
  document.body.appendChild(x);
}

window.onclick = myFunction3;

function myFunction3() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}

function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}