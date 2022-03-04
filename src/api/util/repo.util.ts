import axios from "axios";


 function getUserReposNotFork(name: string): Promise<any[]> {
    let repositoryUrl = `https://api.github.com/users/${name}/repos`;
    return axios.get(repositoryUrl)
        .then(response => response.data)
        .then((data: Array<any>) => data.filter(repo =>
            repo.fork === false));
}

export default {getUserReposNotFork};