import CartDetails from "../components/CartDetails";
import OrderSummary from "../components/OrderSummary";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.map((product)=> (<CartDetails product={product}  key={product._id}/>))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
