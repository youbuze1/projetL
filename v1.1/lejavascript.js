var z;
  var xpos;
  var ypos;
  var Tableau;
  var g;
  var flottant;
  var a;
function dessiner(){
  var canvas = document.getElementById('fond');
  if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  var type;
  var x = 0;
  var y =0;
  type =0;
//  Math.floor(Math.random() * Math.floor(3));


  
  //Math.floor(Math.random() * Math.floor(3));

switch (type){
	
case 0:
var g=4;
var Tableau=new Array();
Tableau[0]=new Array(1,1,1,1,1,1,1,1); 
Tableau[1]=new Array(1,1,1,1,1,1,1,1);  
Tableau[2]=new Array(1,1,0,0,0,0,1,1); 
Tableau[3]=new Array(1,1,0,0,0,0,1,1); 
Tableau[4]=new Array(1,1,0,0,0,0,1,1); 
Tableau[5]=new Array(1,1,0,0,0,0,1,1); 
Tableau[6]=new Array(1,1,1,1,1,1,1,1); 
Tableau[7]=new Array(1,1,1,1,1,1,1,1);  
//var Tableau = [[1,1,1,1,1,1],[1,1,1,1,1,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];
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

var Tableau = [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]];
var g=5;
z = (1/5)*600;
a=0;
b=1;
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
var Tableau = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
var g=6;
z = (1/6)*600;
a=0;
b=0;
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




function dessiner_piece(forme,angle,xpos,ypos){
var forme;
var angle;
var xdep=(xpos-2)*z; //position x départ pour translate
var ydep=(ypos-2)*z; //position y départ pour translate
var rotate=0; //rotate est l'angle d'inclinaison de la piece



if(angle==0){
    xdep=xdep;
	
	var rotate=0; 
}
if(angle==1){ //change la position de xdep et ou ydep pour gérer l'angle de la pièce
	xdep=3*(z+xdep);
	rotate=Math.PI/2; //piece à 90°
}
if(angle==2){
	xdep=2*z+xdep;
	ydep=3*z+ydep;
	rotate=Math.PI;
}
if(angle==3){
	ydep=2*(z+ydep);
	rotate=Math.PI*1.5;
}

switch(forme){
case 0:
		ctx.beginPath();
			ctx.translate(xdep,ydep);
			ctx.rotate(rotate);
			ctx.fillStyle = "rgba(0,0,0,0.5)";
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




function dessiner_piece_test(xpos,ypos,Tableau){
var Test=Math.floor(Math.random()*1);
var flottant = Tableau.slice();
var angle=Test;
var type=0;

if (Test>3){
	type=1;
	angle=angle-4;
}

switch (Test){
	case 0:
	a=flottant[xpos][ypos];
    a=a+1;
	flottant.splice([xpos][ypos], 1, a);
	
	a=flottant[xpos][ypos+1];
    a=a+1;
	flottant.splice([xpos][ypos+1], 1, a);
	
	a=flottant[xpos][ypos+2];
    a=a+1
	flottant.splice([xpos][ypos+2], 1, a);
	
	a=flottant[xpos+1][ypos];
    a=a+1;
	flottant.splice([xpos+1][ypos], 1, a);
	
	/*
	flottant [xpos][ypos]=(flottant [xpos][ypos])+1;
    flottant [xpos][ypos+1]=(flottant [xpos][ypos+1])+1;
    flottant [xpos][ypos+2]=(flottant [xpos][ypos+2])+1;
	flottant [xpos+1][ypos]=(flottant [xpos+1][ypos])+1;
	*/
	
	break;
	case 1:
	flottant.splice([xpos][ypos],1,[xpos][ypos]+1);
	flottant.splice([xpos+1][ypos],1,[xpos+1][ypos]+1);
	flottant.splice([xpos+2][ypos],1,[xpos+2][ypos]+1);
	flottant.splice([xpos+2][ypos+1],1,[xpos+2][ypos+1]+1);
	
	/*
	flottant [xpos][ypos]=(flottant [xpos][ypos])+1;
    flottant [xpos+1][ypos]=(flottant [xpos+1][ypos])+1;
    flottant [xpos+2][ypos]=(flottant [xpos+2][ypos])+1;
	flottant [xpos+2][ypos+1]=(flottant [xpos+2][ypos+1])+1;
	*/
	
	break;
	case 2:
    flottant [xpos][ypos+2]=(flottant [xpos][ypos])+1;
    flottant [xpos+1][ypos+1]=(flottant [xpos+1][ypos+1])+1;
    flottant [xpos+1][ypos+2]=(flottant [xpos+1][ypos+2])+1;
	flottant [xpos+1][ypos]=(flottant [xpos+1][ypos])+1;
	break;
	case 3:
	flottant [xpos][ypos+1]=(flottant [xpos][ypos+1])+1;
    flottant [xpos+1][ypos+1]=(flottant [xpos+1][ypos+1])+1;
    flottant [xpos+2][ypos+1]=(flottant [xpos+2][ypos+2])+1;
	flottant [xpos][ypos]=(flottant [xpos][ypos])+1;
	break;
	case 4:
	flottant [xpos][ypos]=(flottant [xpos][ypos])+1;
    flottant [xpos+1][ypos+1]=(flottant [xpos+1][ypos+1])+1;
    flottant [xpos+1][ypos+2]=(flottant [xpos+1][ypos+2])+1;
	flottant [xpos+1][ypos]=(flottant [xpos+1][ypos])+1;
	break;
	case 5:
	flottant [xpos][ypos+1]=(flottant [xpos][ypos+1])+1;
    flottant [xpos+1][ypos+1]=(flottant [xpos+1][ypos+1])+1;
    flottant [xpos+2][ypos+1]=(flottant [xpos+2][ypos+2])+1;
	flottant [xpos+2][ypos]=(flottant [xpos+2][ypos])+1;
	break;
	case 6:
    flottant [xpos][ypos]=(flottant [xpos][ypos])+1;
    flottant [xpos][ypos+1]=(flottant [xpos][ypos+1])+1;
    flottant [xpos][ypos+2]=(flottant [xpos][ypos+2])+1;
	flottant [xpos+1][ypos+2]=(flottant [xpos+1][ypos+2])+1;
	break;
	case 7:
    flottant [xpos][ypos]=(flottant [xpos][ypos])+1;
    flottant [xpos+1][ypos]=(flottant [xpos+1][ypos])+1;
    flottant [xpos+2][ypos]=(flottant [xpos+2][ypos])+1;
	flottant [xpos][ypos+1]=(flottant [xpos][ypos+1])+1;
	break;
}


if (flottant.includes(2)){	
flottant=Tableau.slice();
}
else {
dessiner_piece(Test,angle,xpos,ypos);
Tableau=flottant.slice();
}
}

function calcul(Tableau,g){

var t;
for (t=0;t<2;t++){
var xpos=(Math.floor(Math.random()*g))+2;
var ypos=(Math.floor(Math.random()*g))+2;
dessiner_piece_test(xpos,ypos,Tableau);
;}

}

calcul(Tableau,g);
}