import React from "react";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const { name, image, info, glass, category, instructions, ingredients } =
    cocktail;
  return (
    <section className="pt-20 pb-20">
      <div className="text-center">
      <Link to="/" className="pt-1 pl-2 pb-1 pr-2 uppercase bg-green-800 text-white tracking-widest rounded">
        back home
      </Link>
      </div>
      <h2 className="text-3xl font-bold tracking-widest text-center mt-4 mb-14">{name}</h2>
      <div className="grid grid-cols-2 gap-12">
        <img src={image} alt={name} />
        <div className="pt-0">
          <p className="font-bold capitalize mb-5">
            <span className="mr-2 bg-lime-200 pt-1 pr-2 pb-1 pl-2 text-lime-700 rounded">name : </span>
            {name}
          </p>
          <p className="font-bold capitalize mb-5">
            <span className="mr-2 bg-lime-200 pt-1 pr-2 pb-1 pl-2 text-lime-700 rounded">category : </span>
            {category}
          </p>
          <p className="font-bold capitalize mb-5">
            <span className="mr-2 bg-lime-200 pt-1 pr-2 pb-1 pl-2 text-lime-700 rounded">info : </span>
            {info}
          </p>
          <p className="font-bold capitalize mb-5">
            <span className="mr-2 bg-lime-200 pt-1 pr-2 pb-1 pl-2 text-lime-700 rounded">glass : </span>
            {glass}
          </p>
          <p className="font-bold capitalize mb-5">
            <span className="mr-2 bg-lime-200 pt-1 pr-2 pb-1 pl-2 text-lime-700 rounded">instructions : </span>
            {instructions}
          </p>
          <p className="font-bold capitalize mb-5">
            <span className="mr-2 bg-lime-200 pt-1 pr-2 pb-1 pl-2 text-lime-700 rounded">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
