import ipa from "../assets/ipa.webp"
import stout from "../assets/stout.jpg"
import rubia from "../assets/rubia.png"
import snack from "../assets/snacks.png"
import coctel from "../assets/coctel.jpg"
import ProductCard from "./ProductCard"
  const ProductGrid = () => {
    const items = [
      { title: 'IPA ARTESANAL', image: ipa, size: 'large' },
      { title: 'STOUT CON CACAO', image:stout, size: 'small' },
      { title: 'RUBIA LIVIANA', image: rubia, size: 'small' },
      { title: 'TABLAS Y SNACKS', image: snack, size: 'medium' },
      { title: 'COCTELERÍA CON CERVEZA', image: coctel, size: 'small' },
    ];
    const leftColumn = items.filter((_, index) => index % 2 === 0); // impares visualmente (0, 2, 4)
    const rightColumn = items.filter((_, index) => index % 2 !== 0); // pares visualmente (1, 3, 5)
    return (
      <section className="product-columns">
      <div className="column col-left">
        {leftColumn.map((item, idx) => (
          <ProductCard key={`left-${idx}`} title={item.title} image={item.image} size={item.size} />
        ))}
      </div>
      <div className="column col-right">
        {rightColumn.map((item, idx) => (
          <ProductCard key={`right-${idx}`} title={item.title} image={item.image} size={item.size} />
        ))}
      </div>
    </section>
      
    );
  };
  
  export default ProductGrid;
  