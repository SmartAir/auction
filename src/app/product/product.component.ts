import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
  	this.products = [
  		new Product(1, 'Product 1', 1.99, 3, "Auction product 1", ['electronics', 'hardware']),
  		new Product(2, 'Product 2', 2.99, 4, "Auction product 2", ['hardware']),
  		new Product(3, 'Product 3', 3.99, 5, "Auction product 3", ['electronics']),
  		new Product(4, 'Product 4', 4.99, 3.5, "Auction product 4", ['book']),
  		new Product(5, 'Product 5', 5.99, 4.5, "Auction product 5", ['food']),
  		new Product(6, 'Product 6', 6.99, 5, "Auction product 6", ['clothes']),
  		new Product(7, 'Product 7', 7.99, 3.5, "Auction product 7", ['furniture'])
  	];
  }

}

export class Product {
	constructor(
		public id: number,
		public title: string,
		public price: number;
		public rating: number,
		public description: string,
		public category: Array<string>
	) {

	}
}
