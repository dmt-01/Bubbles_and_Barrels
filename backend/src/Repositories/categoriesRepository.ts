import { Repository } from "../Libs/Repository";
import { Category } from "../Models/Category";

export class categoriesRepository extends Repository {
  async findAll() {
    const query = {
      name: "fetch-all-category",
      text: `SELECT * FROM category`,
    };
    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Category.fromRow(row));
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
