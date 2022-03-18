import {Request, Response} from "express";
import userService from "../service/user.service";
import service from "../service/repo.service"
import headerBuilder from "../service/header-builder";

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
    const page: number = +parseInt(req.query?.page);

    // @ts-ignore
    const per_page: number = +parseInt(req.query?.per_page);

    const acceptHeader = req.headers.accept;
    if (acceptHeader != 'application/json') {
        return res.status(406).json({
            status: 406,
            Message: `Unsupported 'Accept' header: ${acceptHeader}. Must accept 'application/json'`
        })
    }

    const headers = headerBuilder.getHeadersForGitHub(req.headers);

    const userData = await userService.getUser(name, headers);
    if (userData.status === 404) {
        return res.status(404).json({
            status: 404,
            Message: 'User does not exist'
        });
    }

    service.getRepoFullInfo(name, page, per_page, headers)
        .then((data: any) => {
            return res.status(200).json(data);
        }).catch(error => {
        return res.status(500).json({
            status: 500,
            Message: 'Server can not processing data for this user'
        });
    });
}

export default {getUserReposByName}

