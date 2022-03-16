import {Request, Response} from "express";
import userService from "../service/user.service";
import service from "../service/repo.service"

/**
 * This is method retrieve user's repos with branches:
 *
 * @param Request
 * @param Response
 * @return Repo[]
 * */
const getUserReposByName = async (req: Request, res: Response) => {
    const name = req.params.username;
    validateInputData(req, res)
        .then(() => service.getRepoFullInfo(name))
        .then((data: any) => {
            console.log(data);
            return res.status(200).json(data);
        }).catch(error => console.log(error));
}

/**
 * This is method validate input value:
 * Validate Accept header, should be 'application/json'
 * Validate user: user with name is exist
 *
 *
 * @param Request
 * @param Response
 * */
async function validateInputData(req: Request, res: Response) {
    const acceptHeader = req.header('Accept');
    if (acceptHeader != 'application/json') {
        res.status(406).json({
            status: 406,
            Message: 'Header Accept: application/xml'
        })
    }

    const name = req.params.username;
    return await userService.getUser(name)
        .then((user: any) => {
            if (user.status === 404)
                res.status(404).json({
                    status: 404,
                    Message: 'User does not exist'
                })
        });
}

export default {getUserReposByName}

