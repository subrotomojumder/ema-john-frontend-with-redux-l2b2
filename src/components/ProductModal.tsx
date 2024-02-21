import { X } from "lucide-react";
import ProductForm from "./ProductForm";
import { useGetSingleProductQuery } from "../redux/features/products/productApi";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductModal = ({ onClose, productId }: any) => {
  const { data, isLoading } = useGetSingleProductQuery(productId);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl  overflow-hidden">
          <X
            width={24}
            height={24}
            className="text-red-600 absolute top-10 right-10 cursor-pointer"
            onClick={onClose}
          />
          <ProductForm
            product={data?.data}
            onClose={onClose}
            isUpdating={data?.data ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
