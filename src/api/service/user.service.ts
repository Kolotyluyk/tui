import userUtil from "../util/user.util"

function getUser(name: string) {
    return userUtil.getUser(name);
}

export default {getUser};

