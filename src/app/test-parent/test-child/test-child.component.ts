import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() user;
  @Output() userSelected: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit();
  }

}
