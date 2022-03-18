import axios from "axios";

/**
 * This is method retrieve non fork repos info by name
 *
 * @param name - repo name
 * @param page
 * @param per_page
 * @return Promise<User>
 */
 function getUserReposNotFork(name: string, page: number, per_page: number): Promise<any[]> {
    const repositoryUrl = `https://api.github.com/users/${name}/repos?per_page=${per_page}&page=${page}`;
    return axios.get(repositoryUrl)
        .then((response: any) => response.data)
        .then((data: Array<any>) => data.filter(repo =>
            repo.fork === false));
}

export default {getUserReposNotFork};