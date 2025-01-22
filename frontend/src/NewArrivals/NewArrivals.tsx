import React from 'react';
import Helmet from '../assets/NewArrivalsAssets/ProframeHelmet.webp';
import Shoe from '../assets/NewArrivalsAssets/OCShoe.avif'
import Jacket from '../assets/NewArrivalsAssets/Jacket.webp'

type Product = {
  id: number;
  name: string;
  colors: number;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Fox Racing Proframe Helmet",
    colors: 10,
    price: "$289.95",
    image: Helmet,
  },
  {
    id: 2,
    name: "On Running Cloudsurfer Trail",
    colors: 4,
    price: "$159.99",
    image: Shoe,
  },
  {
    id: 3,
    name: "Mammut Whitehorn IN Jacket",
    colors: 3,
    price: "$194.88",
    image: Jacket,
  },
];

const NewArrivals: React.FC = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-7xl mb-5 font-semibold text-blue-900 font-Smooch">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  min-h-[500px] font-Smooch">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-sm overflow-hidden hover:shadow-md transition-shadow bg-zinc-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-41 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.colors} Colors</p>
              <p className="text-lg font-bold text-gray-800 mt-2">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
