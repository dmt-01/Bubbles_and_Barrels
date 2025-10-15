import { ProductTypeRow } from "../types/types";

export class Product {
  protected product_id: number;
  protected image: string;
  protected price: number;
  protected stock: number;
  protected name: string;
  protected volume: number;
  protected brand: string;
  protected category_id: number;

  constructor(
    product_id: number,
    image: string,
    price: number,
    stock: number,
    name: string,
    volume: number,
    brand: string,
    category_id: number
  ) {
    this.product_id = product_id;
    this.image = image;
    this.price = price;
    this.stock = stock;
    this.name = name;
    this.volume = volume;
    this.brand = brand;
    this.category_id = category_id;
  }

  static fromRow(row: ProductTypeRow): Product {
    return new Product(
      row.product_id,
      row.image,
      row.price,
      row.stock,
      row.name,
      row.volume,
      row.brand,
      row.category_id
    );
  }

  getProductId() {
    return this.product_id;
  }

  getImage() {
    return this.image;
  }

  getPrice() {
    return this.price;
  }

  getStock() {
    return this.stock;
  }

  getName() {
    return this.name;
  }

  getVolume() {
    return this.volume;
  }

  getBrand() {
    return this.brand;
  }

  getCategoryId() {
    return this.category_id;
  }
}
