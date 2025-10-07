export interface CommandProductTypeRow {
  order_id: number;
  product_id: number;
  quantity: number;
}

export class CommandProduct {
  protected order_id: number;
  protected product_id: number;
  protected quantity: number;

  constructor(order_id: number, product_id: number, quantity: number) {
    this.order_id = order_id;
    this.product_id = product_id;
    this.quantity = quantity;
  }

  static fromRow(row: CommandProductTypeRow): CommandProduct {
    return new CommandProduct(row.order_id, row.product_id, row.quantity);
  }

  getOrderId() {
    return this.order_id;
  }

  getProductId() {
    return this.product_id;
  }

  getQuantity() {
    return this.quantity;
  }
}
