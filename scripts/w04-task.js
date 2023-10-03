/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: "Rosy Bertacchini",
  photo: "images/placeholder.png",
  favoriteFoods: [
    "avocado toast",
    "asparagus",
    "artichokes",
    "marlin fish",
    "mango",
  ],
  hobies: [
    "watch space movies",
    "read books writen in english",
    "walk in the forest",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "Brussels, Belgium",
    length: "2 years",
  },
  {
    place: "Utha, US",
    length: "1 year",
  },
  {
    place: "Baja Califonia, Mexico",
    length: "12 year",
  },
  {
    place: "Coahuila, Mexico",
    length: "27 year",
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

const imageElement = document.querySelector("img");
imageElement.setAttribute("scr", myProfile.photo);
imageElement.setAttribute("alt", `Profile of ${myProfile.name} `);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.innerHTML = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobies.forEach((hobi) => {
  let li = document.createElement("li");
  li.innerHTML = hobi;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.innerHTML = place.place;
  dd.innerHTML = place.length;

  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
