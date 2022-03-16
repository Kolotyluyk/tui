import {Branch} from "../model/Branch";
/**
 * This is method populate Branch
 * @param branchJson -  retrieved branch value from github
 */
function populateBranch(branchJson: any): Branch {
    return {
        name: branchJson.name,
        lastCommitSha: branchJson.commit.sha
    }
}

export default {populateBranch};