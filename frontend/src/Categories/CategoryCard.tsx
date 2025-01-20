import React from "react";

interface CategoryCardProps {
  name: string;
  colors: number;
  price: number;
  discount: number;
  image: string;
  logo: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  colors,
  price,
  discount,
  image,
  logo,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 m-4 transition-transform hover:scale-105">
      <div className="relative mb-6">
        <div className="flex justify-center">
          <img
            src={image}
            className="w-64 h-64 object-contain rounded-md"
            alt={name}
          />
        </div>
        <img
          src={logo}
          className="absolute top-2 left-2 w-12 h-12 object-contain"
          alt="logo"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h3>
        <p className="text-gray-600 flex items-center gap-3 mb-3">
          <span className="w-4 h-4 rounded-full bg-sky-100"></span>
          {colors} colors available
        </p>

        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-gray-900">${discount}</span>
          {discount < price && (
            <span className="text-sm text-gray-500 line-through">${price}</span>
          )}
          {discount < price && (
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
              {Math.round(((price - discount) / price) * 100)}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
