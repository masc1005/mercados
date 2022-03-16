import axios from "axios";

export const varejaoapi = axios.create({ baseURL: "http://localhost:3302" });
