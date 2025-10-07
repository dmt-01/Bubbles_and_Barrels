export interface SaleTypeRow {
  sale_id: number;
  discount: number;
  product_id: number;
}

export class Sale {
  protected sale_id: number;
  protected discount: number;
  protected product_id: number;

  constructor(sale_id: number, discount: number, product_id: number) {
    this.sale_id = sale_id;
    this.discount = discount;
    this.product_id = product_id;
  }

  static fromRow(row: SaleTypeRow): Sale {
    return new Sale(row.sale_id, row.discount, row.product_id);
  }

  getSaleId() {
    return this.sale_id;
  }

  getDiscount() {
    return this.discount;
  }

  getProductId() {
    return this.product_id;
  }
}
