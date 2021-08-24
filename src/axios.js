import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-394fc/us-central1/api", 
  // The API (clod function) URL
});

export default instance;
