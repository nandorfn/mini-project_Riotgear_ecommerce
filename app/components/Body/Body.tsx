import ProductCard from "../Card/ProductCard";

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
        </>
    );
};

export default Body;