import backpack from "../assets/Catimages/backpack-fl.webp";
import arcetryx from "../assets/logos/Arcteryx-Logo.webp";
import vapor from "../assets/Catimages/vapor-helmet.webp";
import Mammut from "../assets/logos/mammut.webp";
import MamJacket from "../assets/Catimages/mammut-jacket.webp";
import blackdiamond from "../assets/logos/black-diamond.webp";
import halcon from "../assets/Catimages/halcon-chalki.webp";
import cotopaxi from "../assets/logos/cotopaxi.webp";
import CategoryCard from "./CategoryCard";
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
      name: "HS Hooded Jacket",
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
      <section className="flex  justify-center">
          {categoriesData.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              colors={category.colors}
              price={category.price}
              discount={category.discount}
              image={category.image}
              logo={category.logo}
            />
          ))}
          
      </section>
    </>
  );
}

export default secCateg;
