import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadCounterService {

  private counter = new BehaviorSubject<number>(0);

  constructor() {}

  getCounterObservable() {
    return this.counter.asObservable();
  }

  incrementCounter() {
    this.counter.next(this.counter.value + 1);
  }

  getCounterValue(): number {
    return this.counter.value;
  
  }}