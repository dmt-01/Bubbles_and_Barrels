import type { Category } from "../../core/types";
import { useEffect, useState } from "react";
import "./categories.scss";

function Categories() {
  const [categories, setcategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        const data = await response.json();
        setcategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="all_category">
      <ul>
        {categories.map((categorie) => (
          <li key={categorie.category_id}>
            <h3>{categorie.name}</h3>
            <img src={categorie.image} alt={categorie.name} />
            <p>{categorie.description}</p>
            <p>
              {categorie.is_alcoholised
                ? "Boisson alcoolisée"
                : "Boisson non alcoolisée"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
