import { Schedule } from './schedule';
import { Users } from './users';

export class Appointment{
    
    id :number;	
    visit_reason: string;
    allergy: string;
    medication_list: string;
    appointment_type: string;
    pcp: string;

    doctor :Users = new Users();
    schedule :Schedule = new Schedule();

    constructor(){
    }

}