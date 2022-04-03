import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

const path = {
  REGIONS: "/regions",
  TOWNS: "/towns",
};

export const getRegionsApi = () => {
  return axios.get(path.REGIONS).then(({ data }) => data);
};

export const getTownsApi = (region) => {
  return axios.get(path.TOWNS + "/" + region).then(({ data }) => data.towns);
};
