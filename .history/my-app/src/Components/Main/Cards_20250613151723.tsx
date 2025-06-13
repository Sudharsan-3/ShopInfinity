import React from 'react';

const Cards = ({ value, id }) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center justify-between gap-2 p-4 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="w-32 h-32">
        <img
          src={value.image}
          alt={value.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium">{value.name}</p>
        <strong className="text-base text-gray-800">₹{value.price.toLocaleString()}</strong>
      </div>
    </div>
  );
};

export default Cards;
