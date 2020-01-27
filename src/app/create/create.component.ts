import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/doctors.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  role: string;
  user: Doctor | Patient;
  res: any;

  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.router.params.subscribe(pathParams => this.role = pathParams.role);
    if (this.role === 'doctor') {
      this.user = new Doctor();
    } else if (this.role === 'patient') {
      this.user = new Patient();
    }
  }

  createDoctor() {
    // console.log(this.user);
    this.userService.createDoctor(this.user as Doctor).subscribe(data => this.res = data);
  }

  createPatient() {
    this.userService.createPatient(this.user as Patient).subscribe(data => this.res = data);
  }

}
