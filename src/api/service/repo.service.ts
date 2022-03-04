import Repository from "../model/Repository";
import {Branch} from "../model/Branch";
import branchService from "../service/branch.service";
import repoUtils from "../util/repo.util";


async function getRepoFullInfo(name: string): Promise<Repository[]> {
    return await repoUtils.getUserReposNotFork(name)
        .then(repos => Promise.all(repos
            .filter(repo => repo.name != null)
            .map(r => fullRepoJsonToRepo(r))));
}

async function fullRepoJsonToRepo(fullRepo: any): Promise<any> {
    const login = fullRepo?.owner.login;
    const repoName = fullRepo?.name;
    const userId = fullRepo?.owner?.id;
    return branchService.getBranches(login, repoName)
        .then(branches => {
        return fillInRepository(login, userId, repoName, branches);
    });
}

function fillInRepository(login: string, userId: number, repoName: string, branches: Branch[]): Repository {
    return {
        name: repoName,
        user: {
            id: userId,
            login: login
        },
        branches: branches
    };
}

export default {getRepoFullInfo, fullRepoToRepo: fullRepoJsonToRepo};
