const axios = require('axios');

const getBreeds = async () => {
  try {
    return axios.get(`https://dog.ceo/api/breeds/list/all`);
  } catch (err) {
    return err;
  }
};

const getBreedImages = async (breed) => {
  try {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  } catch (err) {
    return err;
  }
};

export default {
  getBreeds,
  getBreedImages,
};
