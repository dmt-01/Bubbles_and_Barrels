import { Repository } from "../libs/Repository";
import Token from "../models/Token";

export class TokenRepository extends Repository {
  async find(token: string): Promise<Token | null> {
    const query = {
      name: "find-token",
      text: "SELECT * FROM token WHERE token = $1",
      values: [token],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rowCount === 0) return null;

      return Token.fromRow(result.rows[0]);
    } catch (error) {
      console.error("Erreur lors de la recherche du token :", error);
      throw error;
    }
  }

  async findByUserId(userId: number): Promise<Token | null> {
    const query = {
      name: "find-token-by-user-id",
      text: "SELECT * FROM token WHERE user_id = $1",
      values: [userId],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rowCount === 0) return null;

      return Token.fromRow(result.rows[0]);
    } catch (error) {
      console.error("Erreur lors de la recherche correspondant user/token:", error);
      throw error;
    }
  }

  async create(token: Token): Promise<number | null> {
    const query = {
      name: "create-token",
      text: `INSERT INTO token (user_id, token, created_at)
      VALUES ($1, $2, $3)
      RETURNING token_id
      `,
      values: [token.getUserId(), token.getToken(), token.getCreatedAt()],
    };

    try {
      const resultCreateUser = await this.pool.query<{ id: number }>(query);

      return resultCreateUser.rows[0].id;
    } catch (error) {
      console.error("Erreur lors de la creation du token :", error);
      throw error;
    }
  };
}
