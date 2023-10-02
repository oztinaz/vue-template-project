import CookieUtils from "@/utils/CookieUtils";
import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

axios.defaults.headers.common['Authorization'] = `Bearer ${CookieUtils.get('X-ACCESS-TOKEN')}`;

export default axios;
