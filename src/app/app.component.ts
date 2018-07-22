import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedItems = [];
  selectedUser;
  user = {name: 'petya'};
  users = [{name: 'petya'}, {name: 'bob'}, {name: 'nebob'}];
}
