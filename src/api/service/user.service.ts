import userUtil from "../util/user.util"
import {User} from "../model/user";
import {HeadersForGit} from "../model/headers-git";

/**
 * This is method retrieve user info by name
 *
 * @param name - user name
 * @param headers
 * @return Promise<User>
 */
function getUser(name: string, headers: HeadersForGit) {
    return userUtil.getUser(name, headers);
}

export default {getUser};

