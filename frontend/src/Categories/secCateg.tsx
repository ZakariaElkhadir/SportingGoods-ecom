import backpack from "../assets/Catimages/backpack-fl.webp";
import arcetryx from "../assets/logos/Arcteryx-Logo.webp";
import vapor from "../assets/Catimages/vapor-helmet.webp";
import Mammut from "../assets/logos/mammut.webp";
import MamJacket from "../assets/Catimages/mammut-jacket.webp";
import blackdiamond from "../assets/logos/black-diamond.webp";
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
  ];

  return (
    <>
      <section className="m-12">
        <h2 className="text-3xl text-sky-800 mb-2">ON SALE</h2>
        <div className="flex justify-center gap-8 ">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg w-96 h-[33rem] p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={category.logo}
                  className="absolute top-4 left-4 w-16 object-contain"
                  alt="brand logo"
                />
                <div className="flex justify-center mb-6">
                  <img
                    src={category.image}
                    className="w-72 h-72 object-contain"
                    alt={category.name}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold capitalize">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.colors} colors available
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 line-through">
                    ${category.price}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ${category.discount}
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
