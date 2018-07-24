import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  productCart = [];
  products = [
    {
      name: 'Обои', articul: '1045', brand: 'Fromental',  id: '1',
      price: '1045', image: '../../assets/images/shop_list_fitst.png',
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '2',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '3',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '4',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '5',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '6',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '7',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '8',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои', articul: '1045', brand: 'Fromental', id: '9',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
  ];

  pushToCart(event: Product) {
    this.productCart.push(event);
  }
}
