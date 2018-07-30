import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  productCart;
  @Input()
  products;
  public open = false;
  public a: string;
  public category: string;
  public openCategory = false;
  public filteredCategory;

  public categorySearch = [
    { name: 'По умолчанию', product: 'all' },
    { name: 'Названию', product: 'name' },
    { name: 'Артикулу', product: 'articul' },
    { name: 'Бренду', product: 'brand' },
  ];

  condition = true;

  toggle() {
    this.condition = !this.condition;
  }

  deleteFromCart(event: any) {
    this.productCart.splice(event, 1);
  }

  categorySelect(target) {
    this.category = target.innerHTML;
    this.filteredCategory = this.categorySearch.filter(product => product.name === this.category);
    this.filteredCategory = this.filteredCategory[0].product;
  }

  openCategorySearch() {
    this.openCategory = !this.openCategory;
  }

}
