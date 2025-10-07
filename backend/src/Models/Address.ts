export interface AdressTypeRow {
  address_id: number;
  city: string;
  zipcode: string;
  street: string;
  complement: string | null;
  country: string;
}

export class Adress {
  protected address_id: number;
  protected city: string;
  protected zipcode: string;
  protected street: string;
  protected complement: string | null;
  protected country: string;

  constructor(
    address_id: number,
    city: string,
    zipcode: string,
    street: string,
    complement: string | null,
    country: string
  ) {
    this.address_id = address_id;
    this.city = city;
    this.zipcode = zipcode;
    this.street = street;
    this.complement = complement;
    this.country = country;
  }

  static fromRow(row: AdressTypeRow): Adress {
    return new Adress(
      row.address_id,
      row.city,
      row.zipcode,
      row.street,
      row.complement,
      row.country
    );
  }

  getAddressId() {
    return this.address_id;
  }

  getCity() {
    return this.city;
  }

  getZipcode() {
    return this.zipcode;
  }

  getStreet() {
    return this.street;
  }

  getComplement() {
    return this.complement;
  }

  getCountry() {
    return this.country;
  }
}
