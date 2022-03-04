'use strict'

const branches = {
    master: {
        data: [{
            name: "master",
            commit: {
                sha: "lastCommitSha"
            }
        }]
    },
    qa: {
        data: [{
            name: "master",
            commit: {
                sha: "lastCommitSha"
            }
        },
            {
                name: "second",
                commit: {
                    sha: "22222"
                }
            },
            {
                name: "third",
                commit: {
                    sha: "33333"
                }
            }

        ]
    }
}

function getBranches(login: string, repo: string) {
    //@ts-ignore
    return new Promise((resolve, reject) => resolve(branches[repo]));
}

export default {getBranches};