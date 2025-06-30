
import BeerProductCard from "./BeerProductCard";
import "./beerProduct.css";
import ipa from "../assets/ipaT.png";
import honey from "../assets/honeyT.png";
import porter from "../assets/Porter_T.png";
import scotch from "../assets/ScotchT.png";
import barley from "../assets/BarleyT.png";
import imperial from "../assets/ImperialT.png";
import centinela from "../assets/centinelaT.png";
import kolsch from "../assets/KolschT.png";

const products = [
  { title: "Cerveza IPA Lata", image: ipa },
  { title: "Cerveza Honey Beer", image: honey },
  { title: "Cerveza Porter", image: porter },
  { title: "Cerveza scotch", image: scotch },
  { title: "Cerveza Barley Wine", image: barley },
  { title: "Cerveza Imperial Stout", image: imperial },
  { title: "Cerveza Centinela", image: centinela },
  { title: "Cerveza Kölsch", image: kolsch },
];

const BeerProductGrid = () => {
  return (
    <div className="products">
      {products.map((item, idx) => (
        <BeerProductCard
          key={`left-${idx}`}
          title={item.title}
          image={item.image}
        />
      ))}

    </div>
  );
};

export default BeerProductGrid;
