import Repository from "../../model/repository";
import {User} from "../../model/user";
import {Branch} from "../../model/branch";

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

async function getRepoFullInfo(name: string, page: number, per_page: number): Promise<Repository[]> {
    return new Promise((resolve, reject) =>
        // @ts-ignore
        resolve(repos[name]));
}

export default {getRepoFullInfo};
