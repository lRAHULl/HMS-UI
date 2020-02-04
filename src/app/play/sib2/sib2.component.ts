import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.scss']
})
export class Sib2Component implements OnInit {

  msg: any;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.message.subscribe(msg => this.msg = msg);
  }

}
