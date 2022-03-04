import axios from "axios";

function getBranches(login: string, repo: string) {
    const url = `https://api.github.com/repos/${login}/${repo}/branches`;
    return axios.get(url);

}

export default {getBranches};