import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() productCart;

  condition = true;

  toggle() {
    this.condition = !this.condition;
  }
}
