/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
/* ------------------------------------------------------------------------ */
let fullName = "Rosy Bertacchini";
let currentYear =  "";
let profilePicture = "";
const myPicture  = "images/RosaMaZamarronMedrano.jpg";

/* Step 3 - Element Variables */
/* ------------------------------------------------------------------------ */
const nameElemet = document.getElementById("name");
const foodElemet = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("myPicture");

/* Step 4 - Adding Content */
/* ------------------------------------------------------------------------ */
nameElemet.innerHTML = `<strong> ${fullName} </strong>`
yearElement.textContent = "2023";
imageElement.setAttribute("scr",myPicture);



/* Step 5 - Array */
/* ------------------------------------------------------------------------ */





