import {User} from "./user";
import {Branch} from "./branch";


export default interface Repository {
 name:string;
 user: User;
 branches?: Branch[];
}