'use strict'

import {User} from "../../model/User";

const users = {
    "login": {
        data: {
            id: 1,
            login: 'login'
        }
    },
    "login2": {
        data: {
            id: 2,
            login: 'login2'
        }
    },
    "user": {
        status: 404
    }

};

function getUser(name: string): Promise<User> {

    return new Promise((resolve, reject) =>
        // @ts-ignore
        users[name] ? resolve(users[name])
            : reject("Not Found"));
}

export default {getUser};