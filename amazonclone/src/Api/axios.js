import axios from "axios";

const axiosInstance = axios.create({
  //Local Instance of Functions
  // baseURL: "http://127.0.0.1:5001/clone-dcc22/us-central1/api",

  // Deployment using Firebase Functions

  baseURL: "https://api-rqzwiceuiq-uc.a.run.app/",

  //Render Method without functions

  // baseURL: "https://amazon-api-deploy-6bjk.onrender.com"
});

export { axiosInstance };
