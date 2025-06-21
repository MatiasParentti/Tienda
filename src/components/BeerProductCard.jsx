import "./beerProduct.css"
const BeerProductCard = ({ title, image }) => (
    <div className="beer-product-card">
      <img src={image} alt={title} />
      <p className="beer-title">{title}</p>
    </div>
  );
  
  export default BeerProductCard;
  