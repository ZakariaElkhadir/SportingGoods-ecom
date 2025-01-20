import backpack from "../assets/Catimages/backpack-fl.webp";
import arcetryx from "../assets/logos/Arcteryx-Logo.webp";
import vapor from "../assets/Catimages/vapor-helmet.webp";
import Mammut from "../assets/logos/mammut.webp";
import MamJacket from "../assets/Catimages/mammut-jacket.webp";
import blackdiamond from "../assets/logos/black-diamond.webp";
import halcon from "../assets/Catimages/halcon-chalki.webp";
import cotopaxi from "../assets/logos/cotopaxi.webp";
function secCateg() {
  interface Category {
    name: string;
    colors: number;
    price: number;
    discount: number;
    image: string;
    logo: string;
  }
  const categoriesData: Category[] = [
    {
      name: "Alpha Fl 40 Backpack",
      colors: 2,
      price: 290,
      discount: 189.9,
      image: backpack,
      logo: arcetryx,
    },
    {
      name: "Vapor Helmet",
      colors: 2,
      price: 149.95,
      discount: 192.0,
      image: vapor,
      logo: blackdiamond,
    },
    {
      name: "taiss hs hooded jacket",
      colors: 2,
      price: 350,
      discount: 299.99,
      image: MamJacket,
      logo: Mammut,
    },
    {
      name: "Halcon Chalk Bag",
      colors: 2,
      price: 19.95,
      discount: 15.99,
      image: halcon,
      logo: cotopaxi,
    },
  ];

  return (
    <>
      <section className="m-12">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-sky-600">
          ON SALE
        </h2>
        <div className="flex flex-nowrap justify-between gap-4">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md w-[320px] h-[30rem] p-4 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="relative group">
                <img
                  src={category.logo}
                  className="absolute top-4 left-4 w-16 object-contain z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="brand logo"
                />
                <div className="flex justify-center mb-6 overflow-hidden">
                  <img
                    src={category.image}
                    className="w-64 h-64 object-contain transform group-hover:scale-105 transition-transform duration-300"
                    alt={category.name}
                  />
                </div>
              </div>
              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-semibold capitalize tracking-tight hover:text-sky-700 transition-colors cursor-pointer">
                  {category.name}
                </h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-sky-100"></span>
                  {category.colors} colors available
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 line-through text-lg">
                    ${category.price.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold text-green-600">
                    ${category.discount.toFixed(2)}
                  </span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {Math.round(
                      ((category.price - category.discount) / category.price) *
                        100
                    )}
                    % OFF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default secCateg;
