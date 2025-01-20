import backpack from "../assets/Catimages/backpack-fl.webp";
import arcetryx from "../assets/logos/Arcteryx-Logo.webp";
import vapor from "../assets/Catimages/vapor-helmet.webp";
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
      discount: 192.00,
      image: vapor,
      logo: blackdiamond,
    },
  ];

  return (
    <>
      
      <div className="flex justify-center m-10">
          {categoriesData.map((category, index) => (
            <div key={index} className="bg-gray-200 w-96 p-10 pl-2 mr-10">
              <div className="flex justify-center">
                <img src={category.image} width={250} alt="backpack" />
              </div>
              <img src={category.logo} width={70} alt="logo" />
              <h3 className="text-3xl">{category.name}</h3>
              <p>{category.colors} colors</p>
              <p>${category.price}</p>
              <p> ${category.discount}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default secCateg;
