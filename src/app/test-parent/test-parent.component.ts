import { Component } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})

export class TestParentComponent {
  selectedUser;
  // user = { name: 'john' };
  users = [
    { name: 'john' },
    { name: 'bob' },
    { name: 'nebob' }
  ];

  cartUsers = [];

  addUsers() {
    return console.log(this.cartUsers.push(this.selectedUser));
  }
}
