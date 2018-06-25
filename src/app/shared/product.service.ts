import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Array<Product> = [
    new Product(1, 'Product1', 1.99, 3, "Auction product 1", ['electronics', 'hardware']),
    new Product(2, 'Product2', 2.99, 4, "Auction product 2", ['hardware']),
    new Product(3, 'Product3', 3.99, 5, "Auction product 3", ['electronics']),
    new Product(4, 'Product4', 4.99, 3.5, "Auction product 4", ['book']),
    new Product(5, 'Product5', 5.99, 4.5, "Auction product 5", ['food']),
    new Product(6, 'Product6', 6.99, 5, "Auction product 6", ['clothes']),
    new Product(7, 'Product7', 7.99, 3.5, "Auction product 7", ['furniture'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2018-06-25 05:13', 'Harry', 3, 'Very nice!'),
    new Comment(2, 1, '2018-05-25 05:13', 'Mary', 4, 'Really nice!'),
    new Comment(3, 1, '2018-04-25 05:13', 'Tom', 5, 'Very good!'),
    new Comment(4, 2, '2018-03-25 05:13', 'John', 4, 'Awesome!'),
    new Comment(5, 2, '2018-02-25 05:13', 'Smith', 3, 'Great!'),
    new Comment(6, 3, '2018-01-25 05:13', 'James', 3, 'Excellent!'),
    new Comment(7, 4, '2018-05-25 05:13', 'Paul', 5, 'Looks good!')
  ] 

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(
		public id: number,
		public title: string,
		public price: number,
		public rating: number,
		public description: string,
		public category: Array<string>
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}
