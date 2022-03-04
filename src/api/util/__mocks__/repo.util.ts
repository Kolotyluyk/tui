'use strict'
const repo = {
    1: {
        owner: {
            id: 1,
            login: 'login'
        },
        name: "master",
    },
    2: {
        owner: {
            id: 2,
            login: 'login2'
        },
    }
}

 function getUserReposNotFork(name: string): Promise<any[]> {
    //@ts-ignore
    return new Promise((resolve) => resolve([repo[name]]));
}

export default {getUserReposNotFork}