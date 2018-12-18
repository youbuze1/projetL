var z;

function dessiner(){
  var canvas = document.getElementById('fond');
  if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  var type;
  var x = 0;
  var y =0;
  type = Math.floor(Math.random() * Math.floor(3));

switch (type){
	
case 0:

z = (1/4)*600;

while ( x < 600 ){
	
while (y < 600){
ctx.fillRect(x, y, z, z);
ctx.clearRect(x+1.5, y+1.5, z-3, z-3);
y = y+z;	
}
y = 0;
x = x + z;
}

break;

case 1:

z = (1/5)*600;

while ( x < 600 ){

while (y < 600){
ctx.fillRect(x, y, z, z);
ctx.clearRect(x+1.5, y+1.5, z-3, z-3);
y = y+z;	
}
y = 0;
x = x + z;
}
break;

case 2:

z = (1/6)*600;

while ( x < 600){

while (y < 600){
ctx.fillRect(x, y, z, z);
ctx.clearRect(x+1.5, y+1.5, z-3, z-3);
y = y+z;	
}
y = 0;
x = x + z;
}

break;
default: 
break;
}
}

function dessiner_piece(forme){
var forme;
var angle=Math.floor(Math.random()*4);
var xdep=0; //position x départ pour translate
var ydep=0; //position y départ pour translate
var rotate=0; //rotate est l'angle d'inclinaison de la piece

if(angle==0){
	var xdep=0; 
	var ydep=0;
	var rotate=0; 
}
if(angle==1){ //change la position de xdep et ou ydep pour gérer l'angle de la pièce
	xdep=3*z;
	rotate=Math.PI/2; //piece à 90°
}
if(angle==2){
	xdep=2*z;
	ydep=3*z;
	rotate=Math.PI;
}
if(angle==3){
	ydep=2*z;
	rotate=Math.PI*1.5;
}

switch(forme){
case 0:
		ctx.beginPath();
			ctx.translate(xdep,ydep);
			ctx.rotate(rotate);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fillRect(0,0,2*z,z);
			ctx.moveTo(0,0);
			ctx.fillRect(0,0,z,3*z);
		ctx.closePath();    
break;
case 1:
	ctx.beginPath();
		ctx.translate(xdep,ydep);
		ctx.rotate(rotate);
		ctx.fillStyle = "rgba(0,0,0,1)";
		ctx.fillRect(0,0,2*z,z);
		ctx.moveTo(0+z,0);
		ctx.fillRect(0+z,0,z,3*z);
	ctx.closePath(); 
break;
default:
break;
}
}
dessiner_piece(Math.floor(Math.random()*2));
}
