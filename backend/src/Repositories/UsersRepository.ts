import { Repository } from "../Libs/Repository";
import { Users } from "../Models/Users";

export class UsersRepository extends Repository {
  async findAllUsers(): Promise<Users[]> {
    const query = {
      name: "fetch-all-Users",
      text: `SELECT * FROM Users`,
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
