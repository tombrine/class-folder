export const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt="Product Image"
        className="product-image"
      />
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <a href="#" className="product-button">
          Read more
        </a>
      </div>
    </div>
  );
};
