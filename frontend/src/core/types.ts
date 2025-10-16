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

export type Cart = {
  products: { product_id: number; quantity: number }[];
};
