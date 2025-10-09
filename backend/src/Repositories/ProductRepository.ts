import { Repository } from "../Libs/Repository";
import { Product } from "../Models/product";

export class ProductRepository extends Repository {
  async findById(id: string): Promise<Product | null> {
    const query = {
      name: "fetch-product-by-id",
      text: `SELECT * FROM product WHERE id = $1`,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      return Product.fromRow(result.rows[0]);
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async findAllProducts(
    alcoholised: boolean | null = null,
    sales: boolean | null = null,
    categories: number[] = []
  ): Promise<Product[]> {
    const query = {
      name: "fetch-product-by-id",
      text: this.buildQuery(alcoholised, sales, categories),
      values: [alcoholised, categories.toString()],
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Product.fromRow(row));
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  private buildQuery(
    alcoholised: boolean | null = null,
    sales: boolean | null = null,
    categories: number[] = []
  ): string {
    let baseQuery = "SELECT DISTINCT product.* FROM product";
    if (alcoholised != null) {
      baseQuery +=
        " INNER JOIN category ON category.category_id = product.category_id";
    }
    if (alcoholised != null || sales != null || categories.length != 0) {
      baseQuery += " WHERE";
      if (alcoholised != null) {
        baseQuery += " is_alcoholised = $1";
      }
      if (categories.length != 0) {
        if (baseQuery.slice(-5) !== "WHERE") {
          baseQuery += " AND";
        }
        baseQuery += " category_id IN ($2)";
      }
      if (sales != null) {
        if (baseQuery.slice(-5) !== "WHERE") {
          baseQuery += " AND";
        }
        if (sales === false) {
          baseQuery += " NOT";
        }
        baseQuery +=
          " EXISTS (SELECT sale_id FROM sale WHERE product_id=product.product_id);";
      }
    }
    return baseQuery;
  }
}
