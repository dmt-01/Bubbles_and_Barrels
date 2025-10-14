export interface AdressTypeRow {
  address_id: number;
  city: string;
  zipcode: string;
  street: string;
  complement: string | null;
  country: string;
}

export interface CategoryTypeRow {
  category_id: number;
  name: string;
  is_alcoholised: boolean;
  image: string;
  description: string;
}

export interface CommandProductTypeRow {
  order_id: number;
  product_id: number;
  quantity: number;
}

export interface OrdersTypeRow {
  order_id: number;
  is_confirmed: boolean;
  order_date: Date;
  delivery_date: Date | null;
  user_id: number;
}

export interface ProductTypeRow {
  product_id: number;
  image: string;
  price: number;
  stock: number;
  name: string;
  volume: number;
  brand: string;
  category_id: number;
}

export interface SaleTypeRow {
  sale_id: number;
  discount: number;
  product_id: number;
}

export interface UsersTypeRow {
  user_id: number;
  email: string;
  last_name: string;
  first_name: string;
  phone: string;
  password: string;
  adress_id: number;
}

export type Result<S, E = unknown> = ResultSuccess<S> | ResultFail<E>;

export interface ResultFail<E = unknown> {
  success: false;
  message: string;
  data?: E;
}

export interface ResultSuccess<S> {
  success: true;
  data: S;
  message?: string;
}
