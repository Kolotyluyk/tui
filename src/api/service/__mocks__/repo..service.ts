import Repository from "../../model/Repository";
import {User} from "../../model/User";
import {Branch} from "../../model/Branch";

const repos = {
    "login": [{
        name: 'master',
        user: {
            id: 1,
            login: 'login'
        } as User,
        branches: [{
            name: 'master',
            lastCommitSha: 'lastCommitSha',
        }] as Branch[]
    }] as Repository[],

    "login2": [{
        name: 'master',
        user: {
            id: 2,
            login: 'login2'
        } as User,
        branches: [{
            name: 'master2',
            lastCommitSha: 'lastCommitSha2',
        }] as Branch[]
    }] as Repository[],

}

async function getRepoFullInfo(name: string): Promise<Repository[]> {
    return new Promise((resolve, reject) =>
        // @ts-ignore
        resolve(repos[name]));
}

export default {getRepoFullInfo};
