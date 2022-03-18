import {Branch} from "../model/branch";
import branchUtil from "../util/branch.util";
import branchMapper from '../mapper/branch.mapper';
import {HeadersForGit} from "../model/headers-git";

/**
 * This is method retrieve all branches for repository
 *
 * @param login  - user name
 * @param repo
 * @param headers
 * @return Promise<Branch[]>
 */
function getBranches(login: string, repo: string, headers: HeadersForGit): Promise<Branch[]> {
    return branchUtil.getBranches(login, repo, headers)
        .then((result: any) =>
            result.data.map(branchMapper.populateBranch)
        );
}

export default {getBranches};

