/*var heure = 9;
var heure2 = 21;
var heure3 = 19;

if (heure <= 18 == true){
    alert("Bonjour");
}

if (heure2 <= 18 == false){
    alert("Bonsoir");
}

if (heure <= 18 == true){
    alert("Bonjour");
}
else{
    alert ("Bonsoir")
}

if (heure3 < 12 == true){
    alert("C'est le matin");
}
else if (heure3 == 12 == true){
    alert("Il est midi")
}
else if (heure3 <= 18 == true){
    alert("C'est l'après-midi")
}
else{
    alert("C'est le soir")
}*/


    /* Opérateur logiques
       && = et; || = ou; ! = contaire*/

/*var heure = 9;

if (heure >= 0 && heure < 12 == true) {
    alert("C'est le matin !")
}
else if (heure === 12 == true) {
    alert("Il est midi !")
}
else if (heure > 12 && heure <= 24 == true) {
    alert("C'est l'après-midi ou le soir!")
}
else {
    alert("La valeur entrée ne semble pas valide")
}

if (heure < 0 || heure > 24 == true){
    alert ("L'heure est invalide")
}
else {
    alert("L'heure semble valide")
}

var heure = 18;

if (!(heure <= 16) == true){
    alert("Il est plus de 16h");
}
else{
    alert("Il est moins de 16h")
}*/


    /* Simplification des conditions */

/*var heure = 18;

if (heure > 12) {
    alert("Il est midi passé");
}
if (!heure < 12) {
    alert("Il est midi passé");
}

var x = 6, y = "";

if (x) {
    alert("x est évaluée à true par JS")
}

if (y) {
    alert("y est évaluée à true par JS")
}
else {
    alert("y est évaluée à false par JS")
}*/

    /* Structures ternaires */

/*var heure = 19, bon = "";

bon = (heure <= 18) ? "Bonjour" : "Bonsoir";
alert(bon);*/

    /* Le Switch */

/*var heure = 10;

switch(heure){
    case 8 :
        alert("Il est 8h");
        break;
    case 9 :
        alert("Il est 9h");
        break;
    case 10 :
        alert("Il est 10h");
        break;
    case 11 :
        alert("Il est 11h");
        break;
    case 12 :
        alert("Il est 12h");
        break;
    default :
        alert("Rien à afficher pour cette valeur")
}*/

    /* Incrémentation et décrémentation */

/*var x = 0, xprime = 0, alpha = 10, alphaprime = 10;
var y = x++;
var beta = alpha--;
var yprime = ++xprime;
var betaprime = --alphaprime;

alert("y : " + y +
      "\nx : " + x +
      "\nbeta : " + beta +
      "\nalpha : " + alpha +
      "\nyprime : " + yprime +
      "\nxprime : " + xprime +
      "\nbetaprime : " + betaprime +
      "\nalphaprime : " + alphaprime);*/

    /* Les boucles */

/*var x = 0;

do {
    alert("x vaut : " + x);
    x--;
}
while (x > 10);*/

var i = "";
for(i= 0; i < 10; i++){
    alert("i contient la valeur " + i);
}

const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        } 
    })
}

 