var aboutParalax = document.getElementById("aboutParalax");
var images = new Array();

var eduParalax = document.getElementById("eduParalax");
var images2 = new Array();

var expParalax = document.getElementById("expParalax");
var images3 = new Array();

images[0] = 'paralax2';
images[1] = 'pingPong';
images[2] = 'uga';
images[3] = 'ps';

images2[0] = 'paralax3';
images2[1] = 'sgsc';
images2[2] = 'vsu';

images3[0] = 'paralax4';
images3[1] = 'bball';
images3[2] = 'adidas';

aboutParalax.className = images[0];
var p = images.length;
var p2 = images2.length;
var p3 = images3.length;

var switchImage;
var switchImage2;
var switchImage3;

const interval = setInterval(function changImage(){
    switchImage = Math.round(Math.random() * (p-1));
    switchImage2 = Math.round(Math.random() * (p2-1));
    switchImage3 = Math.round(Math.random() * (p3-1));

    aboutParalax.className = images[switchImage];
    eduParalax.className = images2[switchImage2];
    expParalax.className = images3[switchImage3];
},5000);

/************************* Menu *************************/
function openNav() {
    document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
/************************* Tab Content *************************/

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



/************************* Tab Content2 *************************/
function openExp(evt, expName) {
var j, tabcontent2, tablinks2;
tabcontent2 = document.getElementsByClassName("tabcontent2");
for (j = 0; j < tabcontent2.length; j++) {
    tabcontent2[j].style.display = "none";
}
tablinks2 = document.getElementsByClassName("tablinks2");
for (j = 0; j < tablinks2.length; j++) {
    tablinks2[j].className = tablinks2[j].className.replace(" active", "");
}
document.getElementById(expName).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById("expDefaultOpen").click();