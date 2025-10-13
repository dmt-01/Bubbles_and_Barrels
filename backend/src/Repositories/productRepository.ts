import { Repository } from "../Libs/Repository";
import { Product } from "../Models/product";

export class ProductRepository extends Repository {
  async findProduct() {
    const query = {
      name: "fetch-all-product",
      text: `SELECT * FROM product`,
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Product.fromRow(row));
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
