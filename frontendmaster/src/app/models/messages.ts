import { Users } from './users';

export class Messages{

id :number;
message :string;
status:string;
time:string;
read: number;

snder :Users = new Users();
receiver :Users = new Users();

constructor(){}

}