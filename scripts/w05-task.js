/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {


  temples.forEach((temple) => {

      h3Element = document.createElement("h1");
      h3Element.innerHTML = `${temple.templeName}`;

      const articleElement = document.createElement('article');
      const imageElement   = document.createElement('img');

      imageElement.src =  `${temple.imageUrl}`;
      // imageElement.setAttribute("scr", `${temple.imageUrl}`);  // did not work like this
      imageElement.alt = `${temple.location}`;
      imageElement.width = "200";
      imageElement.height = "200";

      templeElement.appendChild(articleElement).appendChild(h3Element);
      templeElement.appendChild(articleElement).appendChild(imageElement);
      templeElement.appendChild(articleElement);

      //console.log(temple.imageUrl);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  ).then((response) => response.json());
  templeList = response;
  //console.log(templeList);
  displayTemples(templeList);
};

/* reset Function */

const reset = () => {
  templeElement.replaceChildren();
  templeList = {};
};

// Anotehr way to filter, no so optimaze 
function filterByLocation(item) {
    if  (item.location.includes("Utah")) {
    return true;
  }
  return false;
}


/* sortBy Function */
const sortby = (temples) => {
  

  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    case "utah":
      
      // part of the oder solution
      // const arrByLocation = temples.filter(filterByLocation);

        reset();

      // another way to do it, but I could not set the filter keyword ("Utah") as a parameter
      //const filteredLocations = temples.filter(filterByLocation());
      //console.log(filteredLocations);
      //displayTemples(filteredLocations);

      const tempels_in_Utha = temples.filter((temple) =>
               temple.location.toLowerCase().includes('Utah'.toLowerCase())
          );
      //console.log(tempels_in_Utha);      
      displayTemples(tempels_in_Utha);
      break;

    case "notutah":
      reset();
      const tempels_not_in_Utah = temples.filter((temple) =>
               !temple.location.toLowerCase().includes('Utah'.toLowerCase())
          );
      //console.log(tempels_not_in_Utah);
      displayTemples(tempels_not_in_Utah);
      break;

    case "older":
      reset();
      const tempels_older_1950 = temples.filter((temple) =>
               parseInt(temple.dedicated)  <  1950
          );
      console.log(tempels_older_1950);          
      displayTemples(tempels_older_1950);
      break;

    case "all":
      reset();
      getTemples();
      displayTemples(filter);
      break;
  }

  //console.log(filter);
};


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortby(templeList);
});
