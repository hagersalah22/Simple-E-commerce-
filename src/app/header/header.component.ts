import { Component } from '@angular/core';
import { HeadCounterService } from '../services/head-counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  counter: number = 0;

  constructor(private headCounterService: HeadCounterService) {}

  getCounterValue(): number {
    return this.headCounterService.getCounterValue(); 
  }
}  
