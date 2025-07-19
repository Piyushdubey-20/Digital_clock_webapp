let hour = document.getElementById("HOUR");
let min = document.getElementById("MIN");
let sec = document.getElementById("SEC");
let ampm  = document.getElementById("AMPM");
let year  = document.getElementById("YEAR");


function updateclock (){
 const now = new Date();

 let time_rightnow = now.getHours();

 hour.innerHTML=now.getHours().toString().padStart(2,0);
 ampm.innerHTML= time_rightnow>=12? `PM`:`AM`;

 min.innerHTML=now.getMinutes().toString().padStart(2,0);
 
 sec.innerHTML=now.getSeconds().toString().padStart(2,0);
 year.innerHTML=now.getFullYear().toString().padStart(2,0);


}

updateclock();
setInterval(updateclock,1000);




