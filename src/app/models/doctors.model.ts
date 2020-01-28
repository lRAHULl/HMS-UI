// Generated by https://quicktype.io

export class Doctors {
    status: number;
    data: Doctor[];
}

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
    patients: Patient[];
}

export class Patient {
    pkUserId: number;
    fkRoleId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    pkPatientId: number;
    patientHeight: number;
    patientWeight: number;
    street: string;
    city: string;
    doorNo: string;
    bloodGroup: string;
}
