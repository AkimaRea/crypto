import axios from "axios";

export const instance = axios.create({
	baseURL: 'https://dev.sgc.geryon.space/api/',
})