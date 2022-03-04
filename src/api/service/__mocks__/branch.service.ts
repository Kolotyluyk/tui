'use strict'


import {Branch} from "../../model/Branch";

const branches = {
    master: {
        name: "master",
        lastCommitSha: "lastCommitSha"
    }
}

function getBranches(login: string, repo: string): Promise<Branch[]> {
    return new Promise((resolve, reject) => resolve([branches.master]));
}

export default {getBranches};