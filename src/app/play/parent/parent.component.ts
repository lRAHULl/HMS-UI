import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message: string;
  eventMessage: string;

  constructor() { }

  ngOnInit() {
  }

  recieve($event) {
    this.eventMessage = $event;
    // alert($event);
  }

}
