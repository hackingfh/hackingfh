import React from "react";
import { useNavigate } from "react-router-dom";

const YNavbarLeft = () => {
  const navigate = useNavigate();
  return <div className="text-6xl" onClick={() => navigate("/")} >Ecommerce</div>;
};

export default YNavbarLeft;
