import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/doctors.model';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorComponent } from '../validators/custom-validator/custom-validator.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  userForm: FormGroup;
  role: string;
  doctor: Doctor;
  patient: Patient;
  res: any;

  constructor(private router: ActivatedRoute, private userService: UserService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.router.params.subscribe(pathParams => this.role = pathParams.role);
    if (this.role === 'doctor') {
      this.doctor = new Doctor();
      this.userForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        doctorSpecialisation: ['', Validators.required],
        experience: ['', Validators.required],
      });
    } else if (this.role === 'patient') {
      this.patient = new Patient();

      this.userForm = this.fb.group({
        username: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
        ]],
        password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$'),
        ]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        patientHeight: ['', Validators.required],
        patientWeight: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        doorNo: ['', Validators.required],
        bloodGroup: ['', [
          Validators.required,
          CustomValidatorComponent.validateBloodGroup,
        ]],
      });
    }
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get age() {
    return this.userForm.get('age');
  }

  get doctorSpecialisation() {
    return this.userForm.get('doctorSpecialisation');
  }

  get experience() {
    return this.userForm.get('experience');
  }

  get patientHeight() {
    return this.userForm.get('patientHeight');
  }

  get patientWeight() {
    return this.userForm.get('patientWeight');
  }

  get street() {
    return this.userForm.get('street');
  }

  get city() {
    return this.userForm.get('password');
  }

  get doorNo() {
    return this.userForm.get('doorNo');
  }

  get bloodGroup() {
    return this.userForm.get('bloodGroup');
  }

  testBlur() {
    console.log("Username Blurred!");
  }

  createDoctor() {
    const values = this.userForm.value;

    this.doctor.username = values.username;
    this.doctor.password = values.password;
    this.doctor.firstName = values.firstName;
    this.doctor.lastName = values.lastName;
    this.doctor.age = values.age;
    this.doctor.doctorSpecialisation = values.doctorSpecialisation;
    this.doctor.experience = values.experience;

    console.log(this.doctor);
    this.userService.createDoctor(this.doctor).subscribe(data => {
      this.res = data;
      this.route.navigateByUrl('display/doctors');
    });
    console.log(values);
  }

  createPatient() {
    const values = this.userForm.value;

    this.patient.username = values.username;
    this.patient.password = values.password;
    this.patient.firstName = values.firstName;
    this.patient.lastName = values.lastName;
    this.patient.age = values.age;
    this.patient.patientHeight = values.patientHeight;
    this.patient.patientWeight = values.patientWeight;
    this.patient.street = values.street;
    this.patient.city = values.city;
    this.patient.doorNo = values.doorNo;
    this.patient.bloodGroup = values.bloodGroup, [];

    console.log(this.patient);
    this.userService.createPatient(this.patient).subscribe(data => {
        this.res = data;
        this.route.navigateByUrl('/display/patients');
      });
    console.log(values);
  }

  validateBloodGroup(c: FormGroup) {
    const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

    return validBloodGroups.includes(c.value) ? null : {
      validateBloodGroup: {
        valid: false,
      }
    };
  }

}
