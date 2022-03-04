import RepoService from "../../api/service/repo.service";
import Repository from "../../api/model/Repository";
import {Branch} from "../../api/model/Branch";
import {User} from "../../api/model/User";

jest.mock("../../api/util/repo.util");
jest.mock("../../api/service/branch.service");

beforeEach(() => {
});

test('test user with repo and branch', () => {
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
    return expect(RepoService.getRepoFullInfo("1")).resolves.toEqual(expected);
})

test('test user without repo ', () => {
    const expected: Repository[] = [] as Repository[]

    return expect(RepoService.getRepoFullInfo("2")).resolves.toEqual(expected);


})