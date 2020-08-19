var aboutParalax = document.getElementById("aboutParalax");
var images = new Array();
var eduParalax = document.getElementById("eduParalax");
var images2 = new Array();
images[0] = 'paralax2';
images[1] = 'pingPong';
images[2] = 'uga';
images[3] = 'ps';
images2[0] = 'paralax3';
images2[1] = 'sgsc';
images2[2] = 'vsu';
aboutParalax.className = images[0];
var p = images.length;
var p2 = images2.length;
var switchImage;
var switchImage2;
const interval = setInterval(function changImage(){
    switchImage = Math.round(Math.random() * (p-1));
    switchImage2 = Math.round(Math.random() * (p2-1));
    aboutParalax.className = images[switchImage];
    eduParalax.className = images2[switchImage2];
},5000);


function openNav() {
    document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openCity(evt, schoolName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(schoolName).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();