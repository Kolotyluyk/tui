import Repository from "../../api/model/Repository";
import {User} from "../../api/model/User";
import {Branch} from "../../api/model/Branch";
import RepoService from "../../api/service/repo.service";

jest.mock("../../api/service/repo.service");

test('test ', () => {
    const expected: Repository[] = [{
        name: 'master',
        user: {
            id: 1,
            login: 'login'
        } as User,
        branches: [{
            name: 'master',
            lastCommitSha: 'lastCommitSha',
        }] as Branch[]
    }] as Repository[]
    return expect(RepoService.getRepoFullInfo("login")).resolves.toEqual(expected);
})

test('test user without repo ', () => {
    const expected: Repository[] = [] as Repository[]

    return expect(RepoService.getRepoFullInfo("2")).resolves.toEqual(expected);
})