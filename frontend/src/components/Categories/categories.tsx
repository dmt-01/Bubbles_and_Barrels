import { useEffect, useState } from "react"
interface categerieProps{
  id:number;
  name:string;
  image:string,
  is_alcoholised:boolean;
  description:string;
}
function Categories (){
  const [categories, setcategories] = useState<categerieProps[]>([]);

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

    return(
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>
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
  );
}

export default Categories