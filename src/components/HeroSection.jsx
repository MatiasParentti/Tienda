import "./hero.css"
import heroimg from "../assets/heroimg.webp"
const HeroSection = () => (
    <section className="hero">
      {/* <img src={heroimg} alt="Cervezas" /> */}
      <div className="overlay">
        <h2 className="text-4xl font-bold mb-2">SOMOS CERVEZA</h2>
        <p className="text-2xl">Y MUCHO MÁS</p>
      </div>
    </section>
  );
  
  export default HeroSection;
  