'use strict'

import {User} from "../../model/User";

const users = {
    "1": {
        id: 1,
        login: 'login'
    },
    "2": {
        id: 2,
        login: 'login2'
    }
};

function getUser(name: string): Promise<User> {

    return new Promise((resolve, reject) =>
        // @ts-ignore
        users[name] ? resolve(users[name])
            : reject("Not Found"));
}

export default {getUser};