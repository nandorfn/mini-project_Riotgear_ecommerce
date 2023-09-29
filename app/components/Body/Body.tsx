import CategoryCard from "../Card/CategoryCard";
import ProductCard from "../Card/ProductCard";
import shirtBg from '../../assets/Content/shirt.png'
import jacketBg from '../../assets/Content/Jacket.png'
import skateBg from '../../assets/Content/Skate.png'
import shoesBg from '../../assets/Content/Shoes.png'

const Body: React.FC = () => {
    return (
        <>
          <section className="p-4 gap-4 mt-4  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </section>
          <section className="p-4 gap-3 grid grid-cols-1 sm:grid-cols-2">
            <CategoryCard 
              imgSrc={shirtBg}
              label="Top"
            />
            <CategoryCard 
              imgSrc={jacketBg}
              label="Outwear"
            />
            <CategoryCard 
              imgSrc={skateBg}
              label="Bottom"
            />
            <CategoryCard 
              imgSrc={shoesBg}
              label="Accessories"
            />

          </section>
        </>
    );
};

export default Body;