import React from "react";
import { useGlobalContext } from "../context/context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="pt-12">
      <form className="w-[700px] bg-white shadow-2xl py-20 px-20 mr-auto ml-auto rounded" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="naem" className="mb-5 tracking-widest font-bold text-lime-800">Search Your Favorite Cocktail</label>
          <input
          className="bg-slate-200 p-3 rounded"
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
