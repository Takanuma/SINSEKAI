timerID = setInterval('clock()',50);
function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}
function getNow() {
	var now = new Date();
    var year = now.getFullYear();
	var mon = now.getMonth()+1;
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
    
	var s ="";
    if(day<10)s=s+"0";
    s= s + day + "/";
    if(mon<10)s=s+"0";
    s= s + mon + "/" +year + "   " ;
    if(hour<10)s=s+"0";
    s= s + hour + ":" ;
    if(min<10)s=s+"0";
    s= s + min + "  JP"; 
	return s;
}
