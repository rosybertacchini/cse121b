/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Rosy Bertacchini";
let currentYear = "";

//*
const profilePicture = "/images/Yo_RosyBertacchini-1.png";


/* Step 3 - Element Variables */
const nameElemet = document.getElementById("name");
const foodElemet = document.getElementById("food");
const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */
nameElemet.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = "2023";


//*
const imageElement = document.querySelector("img");
imageElement.setAttribute('scr', profilePicture); 
imageElement.setAttribute('alt', `Profile of ${fullName} `); 



/* Step 5 - Array */
let favoriteFoods= ['avocado toast', 'asparagus', 'artichokes', 'marlin fish','mango'];

foodElemet.innerHTML = `${favoriteFoods}`;

let new_favorite = "kiwi";
favoriteFoods.push(new_favorite);
foodElemet.innerHTML +=   `<br>${favoriteFoods}`;


favoriteFoods.pop();
foodElemet.innerHTML +=   `<br>${favoriteFoods}`;


favoriteFoods.splice(0, 1);
foodElemet.innerHTML +=   `<br>${favoriteFoods}`;