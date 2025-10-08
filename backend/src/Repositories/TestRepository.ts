import { Repository } from "../Libs/Repository";
import { Users } from "../Models/Users";

export class TestRepository extends Repository {
  async findAll() {
    const query = {
      name: "fetch-all-users",
      text: `SELECT * FROM users`,
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Users.fromRow(row));
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
