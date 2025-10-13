import { Repository } from "../Libs/Repository";
import { Product } from "../Models/product";
import { Sale } from "../Models/Sale";

export class SaleRepository extends Repository {
  async saleProduct() {
    const query = {
      name: "fetch-sale-product",
      text: `SELECT 
        p.product_id,
        p.name,
        p.price,
        s.sale_id,
        s.discount,
        p.image,
        p.stock,
        p.volume,
        p.brand,
        p.category_id
      FROM Product p
      INNER JOIN Sale s ON p.product_id = s.product_id`,
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => {
        const product = Product.fromRow(row);
        const sale = Sale.fromRow(row);
        const discountedPrice = parseFloat(
          (
            product.getPrice() -
            (product.getPrice() * sale.getDiscount()) / 100
          ).toFixed(2)
        );

        return {
          product,
          sale,
          discountedPrice,
        };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
