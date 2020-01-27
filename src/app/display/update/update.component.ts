import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { Patient } from 'src/app/models/doctors.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  userId: any;
  user: Doctor | Patient;
  res: any = null;

  ngOnInit() {
    this.router.params.subscribe(pathParams => {
      this.userId = pathParams.id;
      console.log(this.userId);
    });

    this.userService.getDoctorById(this.userId).subscribe(data => {
      this.user = data;
      console.log(data);
    });

    if (!this.user) {
      this.userService.getPatientById(this.userId).subscribe(data => {
        this.user = data;
        console.log(data);
      });
    }

    console.log(this.user);
  }

  updateDoctor() {
    this.userService.updateDoctor(this.user as Doctor).subscribe(data => {
      this.res = data;
    });
  }

  updatePatient() {
    this.userService.updatePatient(this.user as Patient).subscribe(data => {
      this.res = data;
    });
  }

}
