import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context/context";

const CocktailList = () => {
  const { cocktails } = useGlobalContext();
  console.log(cocktails);
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className='pt-20 pb-20'>
      <h2 className="text-center mt-5 mb-20 text-3xl font-bold tracking-widest capitalize">cocktails</h2>

      <div className="grid grid-cols-3 gap-8">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
