export interface OrdersTypeRow {
  order_id: number;
  is_confirmed: boolean;
  order_date: Date;
  delivery_date: Date | null;
  user_id: number;
}

export class Orders {
  protected order_id: number;
  protected is_confirmed: boolean;
  protected order_date: Date;
  protected delivery_date: Date | null;
  protected user_id: number;

  constructor(
    order_id: number,
    is_confirmed: boolean,
    order_date: Date,
    delivery_date: Date | null,
    user_id: number
  ) {
    this.order_id = order_id;
    this.is_confirmed = is_confirmed;
    this.order_date = order_date;
    this.delivery_date = delivery_date;
    this.user_id = user_id;
  }

  static fromRow(row: OrdersTypeRow): Orders {
    return new Orders(
      row.order_id,
      row.is_confirmed,
      row.order_date,
      row.delivery_date,
      row.user_id
    );
  }

  getOrderId() {
    return this.order_id;
  }

  getIsConfirmed() {
    return this.is_confirmed;
  }

  getOrderDate() {
    return this.order_date;
  }

  getDeliveryDate() {
    return this.delivery_date;
  }

  getUserId() {
    return this.user_id;
  }
}
