import { Users } from './users';
import { Appointment } from './appointment';

export class Schedule{

    id :number;
    dates :string;
    time :string;
    status :number;

    doctor :Users = new Users();
    appointments : Appointment[] =  [];
	
    constructor(){}

}
