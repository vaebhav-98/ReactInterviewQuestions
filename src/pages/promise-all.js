import React from "react";

const index = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/carts/2")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.products);
        const productPromises = data.products.map((item) =>
          fetch(`https://fakestoreapi.com/products/${item.productId}`).then(
            (res) => res.json()
          )
        );
        return Promise.all(productPromises);
      })
      .then((productDetails) => {
        setProducts(productDetails);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch cart or product details");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center text-xl mt-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 text-xl mt-8">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-500">
              Quantity: {cartItems[index]?.quantity || 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
