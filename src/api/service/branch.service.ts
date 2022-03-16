import {Branch} from "../model/Branch";
import branchUtil from "../util/branch.util";
import branchMapper from '../mapper/branch.mapper';

/**
 * This is method retrieve all branches for repository
 *
 * @param login  - user name
 * @param repo
 * @return Promise<Branch[]>
 */
function getBranches(login: string, repo: string): Promise<Branch[]> {
    return branchUtil.getBranches(login, repo)
        .then((result: any) =>
            result.data.map(branchMapper.populateBranch)
        );
}

export default {getBranches};

