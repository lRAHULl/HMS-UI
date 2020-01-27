export class Doctor {
    pkUserId: number;
    fkRoleId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    pkDoctorId: number;
    experience: number;
    doctorSpecialisation: string;
    patients: Array<any>;
}