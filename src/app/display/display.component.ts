import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  users: any;

  role: number;

  username: string = this.loginService.username;
  password: string = this.loginService.password;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    
  }

  // createDoctor() {
  //   this.router.navigate(['create/doctor']);
  // }

  // createPatient() {
  //   this.router.navigate(['create/patient']);
  // }

  // getDoctors() {
  //   this.userService.getDoctors().subscribe(data => {
  //     this.users = data;
  //   });
  //   this.role = 2;
  // }

  // getPatients() {
  //   this.userService.getPatients().subscribe(data => {
  //     this.users = data;
  //   });
  //   this.role = 1;
  // }

  // deleteDoctor(userId) {
  //   const confirm = prompt(
  //     `Are you sure you want to delete doctor with id ${userId} (type: yes (or) no)`
  //   );
  //   if (confirm.toLowerCase() === 'yes') {
  //     this.userService.deleteDoctor(userId).subscribe(data => {
  //       console.log(data);
  //       this.getDoctors();
  //     });
  //   }
  // }

  // deletePatient(userId) {
  //   const confirm = prompt(
  //     `Are you sure you want to delete patient with id ${userId} (type: yes (or) no)`
  //   );
  //   if (confirm.toLowerCase() === 'yes') {
  //     this.userService.deletePatient(userId).subscribe(data => {
  //       console.log(data);
  //       this.getPatients();
  //     });
  //   }
  // }
}
