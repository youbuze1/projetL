var z; //taille d'un carreau

function dessiner(mode){
  var canvas = document.getElementById('fond');
  if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  var type; //type de grille (4*4,5*5 ou 6*6)
  var x = 300; //position x de la grille
  var xmax = x+600; //fin de la grille
  var y =0; //position y de la grille 
  type = Math.floor(Math.random() * Math.floor(3));

switch (type){
	
case 0:
//la grille fait ici 4*4

z = (1/4)*600;

// z vaut 1/4 de la taille de la grille

while ( x < xmax ){

while (y < 600){
ctx.fillRect(x, y, z, z);
ctx.clearRect(x+1.5, y+1.5, z-3, z-3);
y = y+z;	
//temps que y est plus petit que 600, on dessine un carreau en dessous
}
y = 0;
x = x + z;
//temps que x est plus petit que xmax, on dessine un carreau à droite
}

break;

case 1:

z = (1/5)*600;

while ( x < xmax ){

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

while ( x < xmax){

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

function dessiner_piece(forme,angle,xdep){
var forme;
var angle;
var xdep; //position x départ pour translate
var ydep=z; //position y départ pour translate
var rotate=0; //rotate est l'angle d'inclinaison de la piece


if(angle==0){
	/*var xdep=0; 
	var ydep=0;*/
	var rotate=0; 
}
if(angle==1){ //change la position de xdep et ou ydep pour gérer l'angle de la pièce
	/*xdep=3*z;*/
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
			ctx.translate(0,ydep);
			ctx.rotate(rotate);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fillRect(0,0,2*z,z);
			ctx.moveTo(0,0);
			ctx.fillRect(0,0,z,3*z);
		ctx.closePath();    
break;
case 1:
	ctx.beginPath();
		ctx.translate(1200,ydep);
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
dessiner_piece(0,0);
dessiner_piece(1,2);
}
