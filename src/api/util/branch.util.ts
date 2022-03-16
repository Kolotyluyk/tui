import axios from "axios";


/**
 * This is method retrieve branches info by name
 *
 * @param name - user name
 * @return Promise<User>
 */
function getBranches(name: string, repo: string) {
    const url = `https://api.github.com/repos/${name}/${repo}/branches`;
    return axios.get(url);

}

export default {getBranches};