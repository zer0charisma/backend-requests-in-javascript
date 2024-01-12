const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
   axios
     .get(`${BASE_URL}/constellations`)
     .then(({ data }) => {
       console.log(data.map((element) => element.name));
   })
  .catch((error) => {
     console.log(error.message);
   })
}

function getConstellationsByQuadrant(quadrant) {
  axios
     .get(`${BASE_URL}/constellations`)
     .then(({ data }) => {
      console.log(data.filter((element) => element.quadrant === quadrant));
      })
    .catch((error) => {
    console.log(error.message);
  });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
