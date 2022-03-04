import axios from "axios";

function getUser(name: string) {
    return axios.get(`https://api.github.com/users/${name}`).then();
}

export default {getUser};