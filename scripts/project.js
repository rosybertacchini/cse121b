/* ********************************************************** */
/* Rosy Bertacchini 
/* ********************************************************** */

// ussing a module
import { createButton } from "./module.js";

/* Declare and initialize global variables */
const coordinateElement = document.querySelector("#Coordinates");
let coordinateList = [];

/* async getCoordinates Function using fetch()*/
const getCoordinates = async () => {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/65372e9d0574da7622bcdcc9/"
  ).then((response) => response.json());

  // cearte an array
  coordinateList = response.record.coords;
  initMap(coordinateList);
  displayCoordinates(coordinateList);
};

// use module
const div = document.querySelector("#toggle");
div.appendChild(createButton("moreInfo", "More information"));

/* use template literals  */
const displayCoordinates = (Coordinates) => {
  Coordinates.forEach((coordinate) => {
    //console.log(coordinate.title);
    switch (coordinate.continent) {
      case "America":
        let li_am = document.createElement("li");
        li_am.innerHTML = `${coordinate.title}`;
        document.querySelector("#America").appendChild(li_am);
        break;
      case "Europe":
        let li_eu = document.createElement("li");
        li_eu.innerHTML = `${coordinate.title}`;
        document.querySelector("#Europe").appendChild(li_eu);
        break;
      case "Africa":
        let li_af = document.createElement("li");
        li_af.innerHTML = `${coordinate.title}`;
        document.querySelector("#Africa").appendChild(li_af);
        break;

      default:
        console.log("default");
    }
  });
};

// apear and disapear moreInfo using id element in css
let toggleInfo = () => {
  if ($("#slide-in").hasClass("in")) {
    $("#slide-in").removeClass("in");
  } else {
    $("#slide-in").addClass("in");
  }
};

/* ***************************  I create this code to manage map acording to   https://leafletjs.com/   ******************************* */
// inicializar map
const initMap = (Coordinates) => {
  // Initialize the map
  var map = L.map("mapid").setView([0, 0], 3);
  var markers = [];

  var blackIcon = L.icon({
    iconUrl: "images/map-marker-black.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30],
  });

  var redIcon = L.icon({
    iconUrl: "images/map-marker-red.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30],
  });

  var blueIcon = L.icon({
    iconUrl: "images/map-marker-blue.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30],
  });

  // Add tile layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  // add events to the markers
  Coordinates.forEach(function (coordinate) {
    var marker = L.marker([coordinate.lat, coordinate.lng], {}).addTo(map);
    marker.setIcon(redIcon);
    markers.push(marker);

    var popupContent = "<h2>" + `${coordinate.title}` + "</h2>"; //"<h3>" + coordinate.title + "</h3>"       `${coordinate.title}`;
    popupContent +=
      '<swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30" effect="fade" navigation="true">';
    coordinate.images.forEach(function (image) {
      popupContent +=
        '<div class="swiper-slide"><img src="' + image + '"></div>';
    });
    popupContent += "</swiper-container>";
    popupContent += "<h3>" + `${coordinate.data1}` + "</h3>";
    popupContent += "<h3>" + `${coordinate.data2}` + "</h3>";

    marker.bindPopup(popupContent);

    //events with maps

    // Change color of the marker
    // 1.- *******************************
    marker.on("mouseover", function (e) {
      //console.log(e);
      marker.setIcon(blueIcon);
    });
    marker.on("mouseout", function (e) {
      //console.log(e);
      marker.setIcon(redIcon);
    });
    //*******************************
    marker.on;
  });
};

/* ******************************************************************* */
getCoordinates();
document.querySelector("#moreInfo").addEventListener("click", toggleInfo);
