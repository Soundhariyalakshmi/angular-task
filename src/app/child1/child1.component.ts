import { Component, EventEmitter, Output, Input } from '@angular/core';

import { SharedService } from '../shared-service.service';

@Component({
  selector: 'child1-component',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  constructor(private sharedService: SharedService) {}

  child2Value: string;
  child1Value: string;
  setSharedValue1() {
    this.sharedService.sharedValue1 = this.child2Value;
    this.sharedService.sharedValue2 = this.child1Value;
  }
}
