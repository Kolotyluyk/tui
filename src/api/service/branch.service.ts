import {Branch} from "../model/Branch";
import branchUtil from "../util/branch.util";

function getBranches(login: string, repo: string): Promise<Branch[]> {
    return branchUtil.getBranches(login, repo)
        .then(result =>
            result.data.map(populateBranch)
        );
}

function populateBranch(branchJson: any): Branch {
    return {
        name: branchJson.name,
        lastCommitSha: branchJson.commit.sha
    }
}

export default {getBranches};

