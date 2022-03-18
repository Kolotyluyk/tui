import RepoService from "../../api/service/repo.service";
import Repository from "../../api/model/repository";
import {Branch} from "../../api/model/branch";
import {User} from "../../api/model/user";

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
    return expect(RepoService.getRepoFullInfo("1", 1, 100)).resolves.toEqual(expected);
})

test('test user without repo ', () => {
    const expected: Repository[] = [] as Repository[]

    return expect(RepoService.getRepoFullInfo("2", 1, 100)).resolves.toEqual(expected);
})