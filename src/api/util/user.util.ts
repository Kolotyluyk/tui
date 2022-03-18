import axios from "axios";
import {HeadersForGit} from "../model/headers-git";

/**
 * This is method retrieve user info by name
 *
 * @param name - user name
 * @param headers
 * @return Promise
 */
function getUser(name: string, headers: HeadersForGit) {
    return axios.get(`https://api.github.com/users/${name}`, {
        // @ts-ignore
        headers: headers
    });
}

export default {getUser};