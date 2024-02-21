import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/features/products/productApi";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useGetProductsQuery(undefined);
  // console.log(data, isLoading);
  const onClose = ()=> {
    setShowModal(false)
  }
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold my-10">All Products</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 mt-2 rounded-md"
        >
          Add Product
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {showModal && <ProductModal onClose={onClose}/>}
    </div>
  );
};

export default Products;
