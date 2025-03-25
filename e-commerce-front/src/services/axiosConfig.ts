import axios from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_REACT_APP_BACKEND_BASEURL || "/api";
