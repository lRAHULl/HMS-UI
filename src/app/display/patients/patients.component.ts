import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/doctors.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPatients();
  }

  createPatient() {
    this.router.navigate(['create/patient']);
  }

  getPatients() {
    this.userService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  deletePatient(userId) {
    const confirm = prompt(
      `Are you sure you want to delete patient with id ${userId} (type: yes (or) no)`
    );
    if (confirm.toLowerCase() === 'yes') {
      this.userService.deletePatient(userId).subscribe(data => {
        console.log(data);
        this.getPatients();
      });
    }
  }

}
