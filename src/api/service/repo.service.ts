import Repository from "../model/Repository";
import branchService from "../service/branch.service";
import repoUtils from "../util/repo.util";
import repoMapper from "../mapper/repo.mapper";

/**
 * This is method retrieve user's repos with branches:
 *
 * @param name - user name
 * @param page
 * @param per_page
 * @return Promise<Repository[]>
 */
async function getRepoFullInfo(name: string, page: number, per_page: number): Promise<Repository[]> {
    return await repoUtils.getUserReposNotFork(name, page, per_page)
        .then(repos => Promise.all(repos
            .filter(repo => repo.name != null)
            .map(r => fullRepoJsonToRepo(r))));
}

/**
 * This is method populate repo
 * @param fullRepo
 * @return Promise<Repository>
 */
async function fullRepoJsonToRepo(fullRepo: any): Promise<Repository> {
    const login = fullRepo?.owner.login;
    const repoName = fullRepo?.name;
    const userId = fullRepo?.owner?.id;
    return branchService.getBranches(login, repoName)
        .then(branches => {
            return repoMapper.fillInRepository(login, userId, repoName, branches);
        });
}

export default {getRepoFullInfo, fullRepoToRepo: fullRepoJsonToRepo};
