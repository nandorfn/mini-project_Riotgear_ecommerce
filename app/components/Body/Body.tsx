import ProductCard from "../Card/ProductCard";

const Body: React.FC = () => {
    return (
        <>
          <section className="mt-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
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