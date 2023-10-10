import axios from "axios";

const getCity = async (geoIDs) => {
  const response = await axios.get(
    `https://api.teleport.org/api/cities/geonameid:${geoIDs[0]}`
  );
  console.log(response);
  return response.data;
};
export default getCity;
