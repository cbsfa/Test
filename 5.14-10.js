let draw=document.getElementById("draw");
let _draw=draw.getContext("2d");
_draw.fillStyle="#000000";
_draw.fillRect(0,0,200,400);
_draw.fillStyle="#FFFFFF";
_draw.beginPath();
_draw.arc(50,50,50,0,Math.PI*2,true);
_draw.closePath();
_draw.fill();