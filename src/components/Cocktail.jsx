import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, glass, info }) => {
  return (
    <article className="rounded shadow-xl hover:shadow-2xl transition">
      <div className="p-0 box-border">
        <img className=" object-cover w-full h-80" src={image} alt={name} />
      </div>
      <div className='p-6'>
        <h3 className='text-4xl font-bold mb-2'>{name}</h3>
        <h4 className="text-base tracking-widest font-bold mb-3">{glass}</h4>
        <p className="text-base text-slate-400 mb-1">{info}</p>
        <Link to={`/cocktail/${id}`} className="pt-1 pl-2 pb-1 pr-2 uppercase bg-green-800 text-white tracking-widest rounded-lg">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
