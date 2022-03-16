import axios from "axios";

export const macapapi = axios.create({ baseURL: "http://localhost:3303" });
