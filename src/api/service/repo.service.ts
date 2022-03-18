import Repository from "../model/repository";
import branchService from "../service/branch.service";
import repoUtils from "../util/repo.util";
import repoMapper from "../mapper/repo.mapper";
import {HeadersForGit} from "../model/headers-git";

/**
 * This is method retrieve user's repos with branches:
 *
 * @param name - user name
 * @param page
 * @param per_page
 * @param headers
 * @return Promise<Repository[]>
 */
async function getRepoFullInfo(name: string, page: number, per_page: number, headers: HeadersForGit): Promise<Repository[]> {
    return await repoUtils.getUserReposNotFork(name, page, per_page, headers)
        .then(repos => Promise.all(repos
            .filter(repo => repo.name != null)
            .map(r => fullRepoJsonToRepo(r, headers))));
}

/**
 * This is method populate repo
 * @param fullRepo
 * @param headers
 * @return Promise<Repository>
 */
async function fullRepoJsonToRepo(fullRepo: any, headers: HeadersForGit): Promise<Repository> {
    const login = fullRepo?.owner.login;
    const repoName = fullRepo?.name;
    const userId = fullRepo?.owner?.id;
    return branchService.getBranches(login, repoName, headers)
        .then(branches => {
            return repoMapper.fillInRepository(login, userId, repoName, branches);
        });
}

export default {getRepoFullInfo, fullRepoToRepo: fullRepoJsonToRepo};
