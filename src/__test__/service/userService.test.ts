import userService from "../../api/service/user.service";
import {User} from "../../api/model/user";

jest.mock("../../api/util/user.util");

beforeEach(() => {
});

test('test get user', () => {
    const expected: User =
        {
            id: 1,
            login: 'login'
        } as User;

     return expect(userService.getUser('1')).resolves.toEqual(expected);
});


test('test get user', () => {
     return expect(userService.getUser('3')).rejects.toEqual("Not Found");
});

