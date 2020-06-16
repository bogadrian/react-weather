import axios from 'axios';

export const getCoords = async (lat, lon) => {
  try {
    const coords = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    //const response = await coords.json();

    return coords.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCity = async city => {
  try {
    const coords = await axios.get(
      `http://open.mapquestapi.com/geocoding/v1/address?key=Wb2OY33bA66bhUKnyuGt7H6cyrk5fX40&location=${city}`
    );

    return coords.data.results[0].locations[0];
  } catch (err) {
    console.log(err);
  }
};
