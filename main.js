//var and property
var pencil = {
  "stroke_width":120,
  "max_dots": 120,
  "transparency":1,
}
var lineWidthselector = document.getElementById("LineWidth");
lineWidthselector.value = "10";
var panel = document.getElementById("panel");
panel.width = window.innerWidth - 2;
document.body.width = window.innerWidth;
panel.height = "400"
var clear_p = document.getElementById("clear_p")
var chback = document.getElementById("chback")
var reset_colors_opt = document.getElementById("reset_clr")
var submit_color = document.getElementById("submit_color")
//window.addEventListener("resize",() => panel.width=window.innerWidth)

//function 
var p = panel.getContext("2d");

function line_width_change() {
  // body...
  var p = document.getElementById("panel").getContext("2d");
  var value_of_line = document.getElementById("LineWidth").value;
  p.lineWidth = parseInt(value_of_line);
}

function start(ev) {
  var x = ev.touches[0].clientX;
  var y = ev.touches[0].clientY;
  var p = panel.getContext("2d")
  console.log(x,y)
  p.beginPath();
  p.moveTo(x,y);
  moving(ev);
}
function pencil_props() {
  // body...
  var panel = document.querySelector("#panel");
  var p = panel.getContext("2d");
  p.lineWidth = "3"
  p.strokeStyle = "silver";
  p.lineCap = "square"
  
}
h = document.getElementById("H")
d = document.getElementById("S")
function prv(){
  var clr_prv = document.getElementById("clr_prv");
  var hv = document.getElementById("H").value;
  var sv = document.getElementById("S").value;
  var lv = document.getElementById("L").value;
  clr_prv.style.backgroundColor = "hsl("+hv+","+sv+"%,"+lv+"%)";
  s = document.getElementById("S");
  l = document.getElementById("L");
  s.style.backgroundImage = "linear-gradient(to right,hsl("+hv+",0%,"+lv+"%),hsl("+hv+",100%,"+lv+"%))";
  l.style.backgroundImage = "linear-gradient(to right,hsl("+hv+","+sv+"%,0%),hsl("+hv+","+sv+"%,100%))";
}
h.addEventListener("touchmove",prv)
s = document.getElementById("S");
s.addEventListener("touchmove",prv)
l = document.getElementById("L")
l.addEventListener("touchmove", prv)
var hv = h.value;
var sv = s.value;
var lv = l.value;
s.style.backgroundImage = "linear-gradient(to right,hsl("+hv+",0%,"+lv+"%),hsl("+hv+",100%,"+lv+"%))";
l.style.backgroundImage = "linear-gradient(to right,hsl("+hv+","+sv+"%,0%),hsl("+hv+","+sv+"%,100%))";

function v_changed () {
  // body... pen color
  var panel = document.getElementById("panel");
  var p = panel.getContext("2d");
  var h = document.getElementById("H").value;
  var s = document.getElementById("S").value;
  var l = document.getElementById("L").value;
  p.strokeStyle = "hsl("+h+","+s+"%,"+l+"%)";
}
function clear_panel(){
  var panel = document.getElementById("panel");
  p = panel.getContext("2d");
  p.clearRect(0,0,panel.width,panel.height);
}
function change_back() {
  // body...
  panel.style.backgroundColor = "hsl(15,100%,50%)"
  p = panel.getContext("2d");
  
}
function reset_colors() {
  
  panel.style.backgroundColor = "#ffffff";
  var p = panel.getContext("2d");
  p.strokeStyle = "black"
  
}
function moving(ev) {
  // body...
  var x = ev.touches[0].clientX - pageXOffset;
  var y = ev.touches[0].clientY - pageYOffset;
  p = panel.getContext("2d");
  p.lineCap = "round"
  //p.fillRect(x-(p.lineWidth/2),y-(p.lineWidth/2),p.lineWidth,p.lineWidth)
  //p.arc(x + Math.cos(Math.random() * Math.PI * 2) * radius * Math.random(),y + Math.sin(Math.random() * Math.PI * 2) * radius * Math.random(),1,0, Math.PI * 2,);
  //lineThickness = 1 + Math.sqrt((xStart - xEnd) *(xStart-xEnd) + (yStart - yEnd) * (yStart-yEnd))/5;
  p.lineTo(x,y);
  //p.beginPath();
  p.stroke();
}
//event listeners 
panel.addEventListener("touchstart",start);
panel.addEventListener("touchmove",moving);
clear_p.addEventListener("click",clear_panel);
chback.addEventListener("click",change_back);
reset_colors_opt.addEventListener("click",reset_colors);
