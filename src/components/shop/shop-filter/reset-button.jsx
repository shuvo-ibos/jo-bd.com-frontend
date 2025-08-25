import { useRouter } from "next/navigation";
import React from "react";

const ResetButton = ({ shop_right = false,setPriceValues,maxPrice, isBrand=false,brandName="" }) => {
  const router = useRouter();

  const handleReset = () => {
    setPriceValues([0, maxPrice]);
    router.push(`/${shop_right ? "shop-right-sidebar" : isBrand? brandName:'shop'}`);
  };
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Reset Filter</h3>
      <button
        onClick={handleReset}
        className="tp-btn"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default ResetButton;
