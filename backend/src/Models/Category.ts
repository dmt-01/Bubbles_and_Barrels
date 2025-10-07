export interface CategoryTypeRow {
  category_id: number;
  name: string;
  is_alcoholised: boolean;
  image: string;
  description: string;
}

export class Category {
  protected category_id: number;
  protected name: string;
  protected is_alcoholised: boolean;
  protected image: string;
  protected description: string;

  constructor(
    category_id: number,
    name: string,
    is_alcoholised: boolean,
    image: string,
    description: string
  ) {
    this.category_id = category_id;
    this.name = name;
    this.is_alcoholised = is_alcoholised;
    this.image = image;
    this.description = description;
  }

  static fromRow(row: CategoryTypeRow): Category {
    return new Category(
      row.category_id,
      row.name,
      row.is_alcoholised,
      row.image,
      row.description
    );
  }

  getCategoryId() {
    return this.category_id;
  }

  getName() {
    return this.name;
  }

  getIsAlcoholised() {
    return this.is_alcoholised;
  }

  getImage() {
    return this.image;
  }

  getDescription() {
    return this.description;
  }
}
