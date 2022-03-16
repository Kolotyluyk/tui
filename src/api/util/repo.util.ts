import axios from "axios";

/**
 * This is method retrieve non fork repos info by name
 *
 * @param name - repo name
 * @return Promise<User>
 */
function getUserReposNotFork(name: string): Promise<any[]> {
    let repositoryUrl = `https://api.github.com/users/${name}/repos`;
    return axios.get(repositoryUrl)
        .then((response: any) => response.data)
        .then((data: Array<any>) => data.filter(repo =>
            repo.fork === false));
}

export default {getUserReposNotFork};