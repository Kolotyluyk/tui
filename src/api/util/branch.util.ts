import axios from "axios";
import {HeadersForGit} from "../model/headers-git";


/**
 * This is method retrieve branches info by name
 *
 * @param name - user name
 * @param repo
 * @param headers
 * @return Promise<User>
 */
function getBranches(name: string, repo: string, headers: HeadersForGit) {
    const url = `https://api.github.com/repos/${name}/${repo}/branches`;
    return axios.get(url, {
        // @ts-ignore
        headers: headers
    });

}

export default {getBranches};