var hours=document.getElementById("hours");
var minute=document.getElementById("minute");
var second=document.getElementById("second");


function Watch(){
var h=new Date().getHours();
var m=new Date().getMinutes();
var s= new Date().getSeconds();
if(h<10){
hours.innerHTML="0"+h;    
}
else{
hours.innerHTML=h;      
}
if(m<10){
minute.innerHTML="0"+m;   
}
else
{
    minute.innerHTML=m;     
}
if(s<10){
second.innerHTML="0"+s;  
}
else
{
second.innerHTML=s;    
}

}

setInterval(Watch,1000);