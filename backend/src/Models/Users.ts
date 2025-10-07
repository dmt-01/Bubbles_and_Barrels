export interface UsersTypeRow {
  user_id: number;
  email: string;
  last_name: string;
  first_name: string;
  phone: string;
  password: string;
  adress_id: number;
}

export class Users {
  protected user_id: number;
  protected email: string;
  protected last_name: string;
  protected first_name: string;
  protected phone: string;
  protected password: string;
  protected adress_id: number;

  constructor(
    user_id: number,
    email: string,
    last_name: string,
    first_name: string,
    phone: string,
    password: string,
    adress_id: number
  ) {
    this.user_id = user_id;
    this.email = email;
    this.last_name = last_name;
    this.first_name = first_name;
    this.phone = phone;
    this.password = password;
    this.adress_id = adress_id;
  }

  static fromRow(row: UsersTypeRow): Users {
    return new Users(
      row.user_id,
      row.email,
      row.last_name,
      row.first_name,
      row.phone,
      row.password,
      row.adress_id
    );
  }

  getUserId() {
    return this.user_id;
  }

  getEmail() {
    return this.email;
  }

  getLastName() {
    return this.last_name;
  }

  getFirstName() {
    return this.first_name;
  }

  getPhone() {
    return this.phone;
  }

  getPassword() {
    return this.password;
  }

  getAdressId() {
    return this.adress_id;
  }
}
