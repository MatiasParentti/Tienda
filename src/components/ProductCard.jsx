import "./productGrid.css"

const ProductCard = ({ title, image, size }) => (
    <div className={`product-card ${size}`}>
      <img src={image} alt={title} />
      <div className="title">{title}</div>
    </div>
  );
  export default ProductCard