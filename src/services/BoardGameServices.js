import axios from "axios";

const URL_API = process.env.VUE_APP_BOARD_GAME_API;

export async function getRooms() {
    return axios.get(`${URL_API}rooms`);
}
