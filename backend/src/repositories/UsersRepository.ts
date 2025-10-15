import { Repository } from "../libs/Repository";
import { Users } from "../models/Users";

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
      console.error("Erreur lors de la recherche des utilisateurs :", error);
      throw error;
    }
  }

  async find(id: number): Promise<Users | null> {
    const query = {
      name: "find-user",
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rowCount === 0) return null;

      return Users.fromRow(result.rows[0]);
    } catch (error) {
      console.error("Erreur lors de la recherche de l'utilisateur :", error);
      throw error;
    }
  };

  async findByEmail(email: string): Promise<Users | null> {
    const query = {
      name: "find-user-by-email",
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rowCount === 0) return null;

      return Users.fromRow(result.rows[0]);
    } catch (error) {
      console.error("Erreur lors de la recherche utilisateur :", error);
      throw error;
    }
  };

  async insertUser(userData: {
    email: string;
    last_name: string;
    first_name: string;
    phone: string;
    password: string;
    address: {
      street: string;
      complement?: string | null;
      zipcode: string;
      city: string;
      country: string;
    };
  }): Promise<Users | null> {

    try {
      const insertAddressQuery = {
        text: `
        INSERT INTO address (street, complement, zipcode, city, country)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING address_id;
      `,
        values: [
          userData.address.street,
          userData.address.complement ?? null,
          userData.address.zipcode,
          userData.address.city,
          userData.address.country,
        ],
      };

      const addressResult = await this.pool.query(insertAddressQuery);
      const addressId = addressResult.rows[0].address_id;

      const insertUserQuery = {
        text: `
        INSERT INTO users (email, last_name, first_name, phone, password, address_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `,
        values: [
          userData.email,
          userData.last_name,
          userData.first_name,
          userData.phone,
          userData.password,
          addressId,
        ],
      };

      const userResult = await this.pool.query(insertUserQuery);

      return Users.fromRow(userResult.rows[0]);
    } catch (error) {
      console.error("Erreur lors de l’insertion utilisateur :", error);
      throw error;
    }
  }
}
