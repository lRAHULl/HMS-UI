import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/doctors.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  DOCTORS_URL = 'http://localhost:8080/doctors/';
  PATIENTS_URL = 'http://localhost:8080/patients/';

  private _listOfDoctor: Array<any> = [{ name: 'Ashok', data: 'Opthamologist' }, { name: 'Swetha', data: 'Dentist' }];
  private _listOfPatient: Array<any> = [{ name: 'Rahul', data: 'Cold' }, { name: 'Kishore', data: 'Fever' }];

  public get listOfPatient(): Array<any> {
    return this._listOfPatient;
  }
  public set listOfPatient(value: Array<any>) {
    this._listOfPatient = value;
  }
  public get listOfDoctor(): Array<any> {
    return this._listOfDoctor;
  }
  public set listOfDoctor(value: Array<any>) {
    this._listOfDoctor = value;
  }

  createDoctor(doctor: Doctor): Observable<any> {
    return this.http.post<any>(this.DOCTORS_URL, doctor);
  }

  createPatient(patient: Patient): Observable<any> {
    return this.http.post<any>(this.PATIENTS_URL, patient);
  }

  getDoctors(): Observable<Array<Doctor>> {
    return this.http.get<Array<Doctor>>(this.DOCTORS_URL);
  }

  getPatients() {
    return this.http.get(this.PATIENTS_URL);
  }

  getDoctorById(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(this.DOCTORS_URL + id);
  }

  getPatientById(id: string): Observable<Doctor> {
    return this.http.get<any>(this.PATIENTS_URL + id);
  }

  updateDoctor(doctor: Doctor): Observable<any> {
    return this.http.put<any>(this.DOCTORS_URL, doctor);
  }

  updatePatient(patient): Observable<any> {
    return this.http.put<any>(this.PATIENTS_URL, patient);
  }

  deleteDoctor(userId): Observable<any> {
    return this.http.delete<any>(this.DOCTORS_URL + userId);
  }

  deletePatient(userId): Observable<any> {
    return this.http.delete<any>(this.PATIENTS_URL + userId);
  }
}
