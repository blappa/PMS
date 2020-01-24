import { Users } from './users';

export class Messages{

id :number;
message :string;
status:string;
time:string;
read: number;

sender :Users = new Users();
receiver :Users = new Users();

constructor(){}

}