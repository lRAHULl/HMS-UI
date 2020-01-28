import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Doctor } from '../models/doctor.model';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required, Validators.maxLength(25), Validators.minLength(6)],
      password: ['', Validators.required, Validators.minLength(5), Validators.maxLength(25)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      doctorSpecialisation: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.myForm.value);
  }

}
