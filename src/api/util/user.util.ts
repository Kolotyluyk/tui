import axios from "axios";
import {result} from "lodash";

/**
 * This is method retrieve user info by name
 *
 * @param name - user name
 * @return Promise
 */
function getUser(name: string) {
    return axios.get(`https://api.github.com/users/${name}`)
}

export default {getUser};