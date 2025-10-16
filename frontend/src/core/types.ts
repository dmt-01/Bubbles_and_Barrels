export type Product = {
  product_id: number;
  image: string;
  price: number;
  stock: number;
  name: string;
  volume: number;
  brand: string;
  category_id: string;
};

export type Category = {
  category_id: number;
  name: string;
  image: string;
  is_alcoholised: boolean;
  description: string;
};

export type ProductResult = {
  success: boolean;
  data: Product;
  message: string;
};

export interface SaleProduct {
  product: {
    product_id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
    volume: number;
    brand: string;
    category_id: number;
  };
  sale: {
    sale_id: number;
    discount: number;
    product_id: number;
  };
  discountedPrice: number;
}

export type Cart = {
  products: { product_id: number; quantity: number }[];
};
export interface UsePostFetchResult<T> {
  postData: (body: unknown) => Promise<T | void>;
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface Address {
  street: string;
  complement: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface UserFormData {
  email: string;
  last_name: string;
  first_name: string;
  phone: string;
  password: string;
  confirmPassword: string;
  address: Address;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UseLogInReturn {
  postData: (data: LoginData) => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

