import { Component, OnInit, OnChanges } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.scss']
})
export class Sib1Component implements OnInit {

  msg: any;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.message.subscribe(msg => this.msg = msg);
  }

  changeMessage() {
    this.subjectService.change(this.msg);
  }

}
