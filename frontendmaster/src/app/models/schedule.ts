import { Users } from './users';

export class Schedule{

    id :number;
    dates :string;
    time :string;
    status :number;

    doctor :Users = new Users();
	
    constructor(){}

}
