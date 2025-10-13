import { Repository } from "../Libs/Repository";
import { Product } from "../Models/product";

export class ProductRepository extends Repository {
  public async findById(id: string): Promise<Product | null> {
    const query = {
      name: "fetch-product-by-id",
      text: `SELECT * FROM product WHERE product_id = $1`,
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

  public async findAllProducts(
    alcoholised: boolean | undefined = undefined,
    sales: boolean | undefined = undefined,
    categories: string[] = []
  ): Promise<Product[]> {
    const queryData = this.buildQuery(alcoholised, sales, categories);
    const query = {
      text: queryData.text,
      values: queryData.values,
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
    alcoholised: boolean | undefined,
    sales: boolean | undefined,
    categories: string[]
  ): { text: string; values: Array<unknown> } {
    let baseQuery = "SELECT DISTINCT product.* FROM product";
    const values = [];
    if (alcoholised !== undefined) {
      baseQuery +=
        " INNER JOIN category ON category.category_id = product.category_id WHERE is_alcoholised = $1";
      values.push(alcoholised);
    }
    if (sales != undefined || categories.length !== 0) {
      if (alcoholised === undefined) {
        baseQuery += " WHERE";
      }
      if (categories.length != 0) {
        if (baseQuery.slice(-5) !== "WHERE") {
          baseQuery += " AND";
        }
        baseQuery += " product.category_id = ANY($2)";
        values.push(categories);
      }
      if (sales != undefined) {
        if (baseQuery.slice(-5) !== "WHERE") {
          baseQuery += " AND";
        }
        if (sales === false) {
          baseQuery += " NOT";
        }
        baseQuery +=
          " EXISTS (SELECT sale_id FROM sale WHERE sale.product_id=product.product_id);";
      }
    }
    return { text: baseQuery, values };
  }

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
