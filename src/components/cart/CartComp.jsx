import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-5 flex items-center justify-between">
      <img
        className="w-[200px] h--[200px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price}
        <span>€</span> ({cart?.quantity}){" "}
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"
      >
        SUPPRIMER
      </div>
    </div>
  );
};

export default CartComp;