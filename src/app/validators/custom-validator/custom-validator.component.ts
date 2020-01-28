import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent {

  static validateBloodGroup(c: FormGroup) {
    const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

    return validBloodGroups.includes(c.value) ? null : {
      validateBloodGroup: {
        valid: false,
      }
    };
  }

}
