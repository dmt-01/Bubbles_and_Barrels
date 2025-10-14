import { useSearchParams } from "react-router";
import { useGetFetcher } from "../../core/useGetFetcher";
import { type Category } from "../../core/types";
import { InputDiv } from "../InputDiv/InputDiv";
import { useState, type FormEvent } from "react";

type FormData = {
  promos: string;
  is_alcoholised: string;
  categories: string[];
};

export function Filter() {
  const { data } = useGetFetcher<Category[]>("categories");
  const [queries, setQueries] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    promos: "",
    is_alcoholised: "",
    categories: [],
  });

  const saleFilters = [
    {
      name: "promos",
      text: "Afficher toutes les offres",
      value: "undefined",
      type: "radio",
    },
    {
      name: "promos",
      text: "Afficher uniquement les promotions",
      value: "true",
      type: "radio",
      id: "saleFalse",
    },
  ];

  const alcoholFilters = [
    {
      name: "is_alcoholised",
      text: "Afficher toutes les boissons",
      value: "undefined",
      type: "radio",
    },
    {
      name: "is_alcoholised",
      text: "Afficher uniquement les boissons alcoolisées",
      value: "true",
      type: "radio",
    },
    {
      name: "is_alcoholised",
      text: "Afficher uniquement les boissons non alcoolisées",
      value: "false",
      type: "radio",
    },
  ];

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.target;
    const categories = formData.categories;

    if (checkbox.checked) {
      categories.push(checkbox.value);
      setFormData((prev) => {
        const updatedForm = { ...prev, ["categories"]: categories };
        return updatedForm;
      });
    } else {
      const filteredCategories = categories.filter((category) => {
        return category !== checkbox.value;
      });
      setFormData((prev) => {
        const updatedForm = { ...prev, ["categories"]: filteredCategories };
        return updatedForm;
      });
    }
  };

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const radio = event.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [radio.name]: radio.value };
      return updatedForm;
    });
  };

  const selectFilters = (event: FormEvent) => {
    event.preventDefault();
    setQueries({
      promos: formData.promos,
      is_alcoholised: formData.is_alcoholised,
      categories: formData.categories.toString(),
    });
  };

  return (
    <form onSubmit={selectFilters}>
      <h2>Filtrer les produits</h2>
      <div>
        <legend>Boissons alcoolisées</legend>
        <ul>
          {alcoholFilters.map((alcoholFilter) => {
            return (
              <li>
                <InputDiv
                  name={alcoholFilter.name}
                  text={alcoholFilter.text}
                  type={alcoholFilter.type}
                  value={alcoholFilter.value}
                  onChangeFunction={handleRadio}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <legend>Promotions</legend>
        <ul>
          {saleFilters.map((saleFilter) => {
            return (
              <li>
                <InputDiv
                  name={saleFilter.name}
                  text={saleFilter.text}
                  type={saleFilter.type}
                  value={saleFilter.value}
                  onChangeFunction={handleRadio}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <legend>Catégories</legend>
        <ul>
          {data &&
            data.map((category) => {
              return (
                <li>
                  <InputDiv
                    name={category.name}
                    text={category.name}
                    type="checkbox"
                    value={category.category_id.toString()}
                    onChangeFunction={handleCheckbox}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      <button>Valider</button>
    </form>
  );
}
