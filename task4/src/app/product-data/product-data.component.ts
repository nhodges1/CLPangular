import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent {
  products: Product[] = [
    {
      name: 'Macbook',
      price: 1199.99,
      description: 'A sleek and powerful laptop.',
    },
    {
      name: 'XBox',
      price: 399.99,
      description: 'An immersive gaming console.',
    },
    {
      name: 'Iphone',
      price: 1499.99,
      description: 'A stylish and innovative smartphone.',
    },
    {
      name: 'TV',
      price: 999.99,
      description: 'A high-definition television with crystal-clear picture quality.',
    },
    {
      name: 'Sound Bar',
      price: 999.99,
      description: 'A sleek and compact audio device that enhances your TVs sound.',
    },
    {
      name: 'Refrigerator',
      price: 999.99,
      description: 'An appliance that keeps your food fresh and organized.',
    },
    {
      name: 'Couch',
      price: 699.99,
      description: 'A comfortable and stylish piece of furniture.',
    },
  ];

  searchQuery: string = '';
  
  get filteredProducts(): Product[] {
    const query = this.searchQuery.toLowerCase().trim();
    return this.products.filter(product => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });
  }
}
