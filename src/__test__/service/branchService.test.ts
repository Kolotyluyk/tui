import branchService from "../../api/service/branch.service";
import {Branch} from "../../api/model/Branch";

jest.mock("../../api/util/branch.util");

beforeEach(() => {
});

test('test get branch', () => {
    const expected: Branch[] =
        [{
            name: "master",
            lastCommitSha: "lastCommitSha"
        },
            {
                name: "second",
                lastCommitSha: "22222"
            },
            {
                name: "third",
                lastCommitSha: "33333"
            }

        ]

    return expect(branchService.getBranches('1', 'qa')).resolves.toEqual(expected);
});




