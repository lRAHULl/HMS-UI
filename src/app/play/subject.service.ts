import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private messageSubject = new Subject();
  message = this.messageSubject.asObservable();

  constructor() { }

  change(msg) {
    this.messageSubject.next(msg);
  }
}
