import axios from "axios";
import backend_url from "../../env";

const httpService = {
  getCity : async (geoIDs) => {
    const response = await axios.get(
      `${backend_url}/getNextCity`
    );
    console.log(response);
    return response.data;
  },
  
  startGame : async () => {
    const response = await axios.get(
      `${backend_url}/startGame`
    );
    console.log(response);
    return response.data;
  }
}

export default httpService
