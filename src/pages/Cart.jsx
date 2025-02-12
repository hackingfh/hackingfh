import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <>
      <div>
        {carts?.length > 0 ? (
          <div>
            {carts?.map((cart, i) => (
              <CartComp key={i} cart={cart} />
            ))}
            <div className="flex items-center justify-end text-2xl">
              TOPLAM TUTAR :{" "}
              <span className="font-bold text-3xl ml-2">{totalAmount} TL</span>
            </div>
          </div>
        ) : (
          <div>Votre panier est vide...</div>
        )}
      </div>
    </>
  );
};

export default Cart;
