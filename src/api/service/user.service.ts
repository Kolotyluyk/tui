import userUtil from "../util/user.util"
import {User} from "../model/user";

/**
 * This is method retrieve user info by name
 *
 * @param name - user name
 * @return Promise<User>
 */
function getUser(name: string) {
    return userUtil.getUser(name);
}

export default {getUser};

