import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { Patient } from 'src/app/models/doctors.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private userService: UserService, private router: ActivatedRoute, private route: Router, private fb: FormBuilder) { }

  userId: number;
  role: string;
  user: Doctor | Patient;
  res: any = null;
  userUpdateForm: FormGroup;

  ngOnInit() {
    this.router.params.subscribe(pathParams => {
      this.userId = pathParams.id;
      this.role = pathParams.role;
      console.log(this.userId);
      console.log(this.role);

      if (this.role.toLowerCase() === 'doctors' || this.role.toLowerCase() === 'doctor') {
        this.userService.getDoctorById(this.userId.toString()).subscribe(data => {
          console.log(data);
          this.userUpdateForm = this.fb.group({
            username: data.username,
            password: data.password,
            age: data.age,
            doctorSpecialisation: data.doctorSpecialisation,
            experience: data.experience,
          });
        });
      } else if ((this.role.toLowerCase() === 'patients' || this.role.toLowerCase() === 'patient')) {
        this.userService.getPatientById(this.userId.toString()).subscribe(data => {
          console.log(data);
          this.userUpdateForm = this.fb.group({
            username: data.username,
            password: data.password,
            age: data.age,
            patientHeight: data.patientHeight,
            patientWeight: data.patientWeight,
          });
        });
      }
    });

    // console.log(this.user);
  }

  updateDoctor() {
    const values = this.userUpdateForm.value;
    this.user = new Doctor();
    this.user.username = values.username;
    this.user.password = values.password;
    this.user.age = values.age;
    this.user.doctorSpecialisation = values.doctorSpecialisation;
    this.user.experience = values.experience;
    this.user.fkRoleId = 2;
    this.user.pkUserId = this.userId;

    console.log(values);
    console.log(this.user);

    this.userService.updateDoctor(this.user as Doctor).subscribe(data => {
      this.res = data;
      this.route.navigateByUrl('display/doctors');
    });
  }

  updatePatient() {
    const values = this.userUpdateForm.value;
    this.user = new Patient();
    this.user.username = values.username;
    this.user.password = values.password;
    this.user.age = values.age;
    this.user.patientHeight = values.patientHeight;
    this.user.patientWeight = values.patientWeight;
    this.user.fkRoleId = 1;
    this.user.pkUserId = this.userId;

    console.log(values);
    console.log(this.user);

    this.userService.updatePatient(this.user as Patient).subscribe(data => {
      this.res = data;
      this.route.navigateByUrl('display/patients');
    });
  }

}
