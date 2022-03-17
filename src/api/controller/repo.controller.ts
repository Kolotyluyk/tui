import {Request, Response} from "express";
import userService from "../service/user.service";
import service from "../service/repo.service"

/**
 * This is method retrieve user's repos with branches:
 *
 * @return Repo[]
 * @param req
 * @param res
 * @param next
 * */
const getUserReposByName = async (req: Request, res: Response) => {
    const name = req.params.username;

    // @ts-ignore
    const page: number = parseInt(req.query?.page) | 1;

    // @ts-ignore
    const per_page: number = parseInt(req.query?.per_page) | 100;

    const acceptHeader = req.headers.accept;
    if (acceptHeader != 'application/json') {
        return res.status(406).json({
            status: 406,
            Message: `Unsupported 'Accept' header: ${acceptHeader}. Must accept 'application/json'`
        })
    }
    const userData = await userService.getUser(name);
    if (userData.status === 404) {
        return res.status(404).json({
            status: 404,
            Message: 'User does not exist'
        });
    }


    service.getRepoFullInfo(name, page, per_page)
        .then((data: any) => {
            return res.status(200).json(data);
        }).catch(error => console.log(error));
}

export default {getUserReposByName}

