import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];

  text = 'Add Doctor';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  createDoctor() {
    this.router.navigateByUrl('create/doctor');
  }

  getDoctors() {
    this.userService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  deleteDoctor(userId) {
    const confirm = prompt(
      `Are you sure you want to delete doctor with id ${userId} (type: yes (or) no)`
    );
    if (confirm.toLowerCase() === 'yes') {
      this.userService.deleteDoctor(userId).subscribe(data => {
        console.log(data);
        this.getDoctors();
      });
    }
  }

}
