import {Branch} from "../model/Branch";
import Repository from "../model/Repository";

/**
 * This is method populate Repository
 *
 * @param login  - user name
 * @param userId
 * @param repoName
 * @param branches
 * @return Promise<Branch[]>
 */
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

export default {fillInRepository};