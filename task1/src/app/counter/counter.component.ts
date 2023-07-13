import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class ComponentComponent implements OnInit {
  num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  doIncrement() {
    this.num++;
  }
  
  doDecrement() {
    if(this.num > 0){
      this.num--;
    } else
    (this.num == 0);
  }
}
