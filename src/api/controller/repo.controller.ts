import {Request, Response} from "express";
import userService from "../service/user.service";
import service from "../service/repo.service"

const getUserReposByName = async (req: Request, res: Response) => {

    const acceptHeader = req.header('Accept');
    if (acceptHeader === 'application/xml') {
        res.status(406).json({
            status: 406,
            Message: 'Header Accept: application/xml'
        })
    }

    const name = req.params.username;
    return await userService.getUser(name)
        .then(user => {
            if (user.status === 404)
                res.status(404).json({
                    status: 404,
                    Message: 'User does not exist'
                })
        })
        .then(() => service.getRepoFullInfo(name))
        .then(data => {
            console.log(data);
            return res.status(200).json(data);
        }).catch(error => console.log(error));
}

export default {getUserReposByName}

