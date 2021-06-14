import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

const API = {
  getAllEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=5");
  },
  sortEmployees: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  filterEmployees: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

export default (API)