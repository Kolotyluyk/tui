import axios from "axios";

/**
 * This is method retrieve user info by name
 *
 * @param name - user name
 * @return Promise
 */
function getUser(name: string) {
    return axios.get(`https://api.github.com/users/${name}`).then();
}

export default {getUser};