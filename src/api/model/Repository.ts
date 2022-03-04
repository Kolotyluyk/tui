import {User} from "./User";
import {Branch} from "./Branch";


export default interface Repository {
 name:string;
 user: User;
 branches?: Branch[];
}