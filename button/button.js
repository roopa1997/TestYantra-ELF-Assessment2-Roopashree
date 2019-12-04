var buton=document.getElementById("buton");
var allchar="012345";

buton.addEventListener("click",myFun);

function myFun(){
  var  randcol= "";
for(var i=0; i<allchar.length; i++){
   randcol += allchar[Math.floor(Math.random()*6)];
   console.log(randcol)
}
document.body.style.backgroundColor= "#"+randcol;
}