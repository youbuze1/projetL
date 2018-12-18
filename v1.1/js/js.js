var x;
var s1 = document.getElementById('sect1'); 
var a1 = document.getElementById('act1'); 
var a2 = document.getElementById('act2'); 
var a3 = document.getElementById('act3'); 
var a4 = document.getElementById('act4'); 
var r = getElementsByClassName('read');

function readmore(x){
if(x==0){
  if(act2.style.display == "block" && act3.style.display == "block" && act4.style.display == "block"){ 
    a2.style.display = "none"; 
    a3.style.display = "none"; 
    a4.style.display = "none"; 
	document.getElementById('read').innerHTML = 'Come back';
	a1.style.width = "75%";
	a1.style.marginLeft = "10%";
	a1.style.marginTop = "10%";
  } else {
    a2.style.display = "block"; 
    a3.style.display = "block"; 
    a4.style.display = "block"; 
	document.getElementById('read').innerHTML = 'Read more';
	a1.style.width = "48%";
	a1.style.marginLeft = "0%";
	a1.style.marginTop = "10px";
  }
}
if(x==1){
  if(act1.style.display == "block" && act3.style.display == "block" && act4.style.display == "block"){ 
    a1.style.display = "none"; 
    a3.style.display = "none"; 
    a4.style.display = "none"; 
	document.getElementById('read1').innerHTML = 'Come back';	
	a2.style.width = "100%";

  } else {
    a1.style.display = "block"; 
    a3.style.display = "block"; 
    a4.style.display = "block"; 
	document.getElementById('read1').innerHTML = 'Read more';	
	a2.style.width = "48%";	
  }
}
if(x==2){
  if(act2.style.display == "block" && act1.style.display == "block" && act4.style.display == "block"){ 
    a2.style.display = "none"; 
    a1.style.display = "none"; 
    a4.style.display = "none"; 
	document.getElementById('read2').innerHTML = 'Come back';	

  } else {
    a2.style.display = "block"; 
    a1.style.display = "block"; 
    a4.style.display = "block"; 
	document.getElementById('read2').innerHTML = 'Read more';	
  }
}
if(x==3){
  if(act2.style.display == "block" && act3.style.display == "block" && act1.style.display == "block"){ 
    a2.style.display = "none"; 
    a3.style.display = "none"; 
    a1.style.display = "none"; 
	document.getElementById('read3').innerHTML = 'Come back';	

  } else {
    a2.style.display = "block"; 
    a3.style.display = "block"; 
    a1.style.display = "block"; 
	document.getElementById('read3').innerHTML = 'Read more';	
  }
}
}

function draw(){


}