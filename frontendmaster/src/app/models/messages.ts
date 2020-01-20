import { Users } from './users';

export class Messages{

id :number;
message :string;
status:string;
time:string;

snder :Users = new Users();
receiver :Users = new Users();

constructor(){}

}