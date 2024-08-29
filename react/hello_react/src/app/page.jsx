import { ProductCard } from "./componenets/product-card";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const { products } = data;

  const responseCategory = await fetch(
    "https://dummyjson.com/products/categories"
  );
  const categories = await responseCategory.json();

  return (
    <main>
      <section>
        <div className="container">
          <select name="" id="">
            {categories.map((category) => (
              <option key={category} value="">
                {category.name}
              </option>
            ))}
          </select>
          <div className="row">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="btns">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
          </div>
        </div>
      </section>
    </main>
  );
}
