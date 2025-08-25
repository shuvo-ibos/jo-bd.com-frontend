'use client';
import { useEffect, useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
// internal
import useCartInfo from "@/hooks/use-cart-info";
import ErrorMsg from "../common/error-msg";
import { useGetShippingAreaQuery, useGetShippingInfoQuery } from "@/redux/features/order/orderApi";

const CheckoutOrderArea = ({ checkoutData }) => {
  const {
    handleShippingCost,
    cartTotal = 0,
    stripe,
    isCheckoutSubmit,
    clientSecret,
    register,
    errors,
    showCard,
    setShowCard,
    shippingCost,
    discountAmount,
    setShippingType,
    shippingType,
    setShippingArea,
    shippingArea,
    areaCharge,
    setAreaCharge,
  } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);
  const { total } = useCartInfo();
  const { data: settings, isError, isLoading } = useGetShippingInfoQuery();
  const { data: areas, isError: areaError, isLoading: areaLoading } = useGetShippingAreaQuery();

  const [note, setNotes] = useState(null);
     // Calculate totals
  const joProducts = cart_products.filter((item) => item.brand_type === "jo")
  const leeProducts = cart_products.filter((item) => item.brand_type === "lee")
  const totalJoQuantity = joProducts.reduce((sum, item) => sum + item.orderQuantity, 0)
  const totalLeeQuantity = leeProducts.reduce((sum, item) => sum + item.orderQuantity, 0)


  const handleShippingArea = (e) => {
    setShippingArea(e);
    const result = areas?.find((area) => area.name === e);
    // setAreaCharge(result?.charge);
    // calculateDeliveryCharge();
  };

  useEffect(() => {
    if( !isLoading) {

      setNotes(`
  1. Delivery charge is free in Bangladesh for JO <br>
              2. Delivery charge will be added for LEE. In Dhaka ${settings?.inside_dhaka} taka. Outside Dhaka ${settings?.outside_dhaka} taka.
              <br>
              3. For LEE, if the product quantity is more than 1, the delivery charge is ${settings?.dhaka} Taka.
              <br>
              4. If a customer buys LEE's product with JO, then the delivery charge is free.
  `)
    }
  }, [isLoading]);

  // Calculate delivery charge based on rules
  const calculateDeliveryCharge = (shippingType) => {
    // console.log(totalJoQuantity, totalLeeQuantity)
    // Rule 4: If customer buys both Jo and Lee products, delivery is free
    if (totalJoQuantity > 0 && totalLeeQuantity > 0) {
      setAreaCharge(0)
      return
    }

    // Rule 1: Jo brand delivery is free in Bangladesh
    if (totalJoQuantity > 0 && totalLeeQuantity === 0 ) {
      setAreaCharge(0)
      return
    }

    // Lee brand delivery charges

    if (totalLeeQuantity > 0) {
      if (totalLeeQuantity > 1) {
        // Rule 3: Lee brand with quantity > 1 = 200 Taka
        setAreaCharge(Number(settings.dhaka))
      } else if (shippingType === "inside_dhaka") {
        console.log(totalLeeQuantity, shippingType)
        // Rule 2: Lee brand in Dhaka = 100 Taka
        setAreaCharge(Number(settings.inside_dhaka))
      } else if(shippingType === "outside_dhaka") {
        console.log(totalLeeQuantity, shippingType)
        // Rule 2: Lee brand outside Dhaka = 150 Taka
        console.log(Number(settings.outside_dhaka))
        setAreaCharge(Number(settings.outside_dhaka))
      }
    } else {
      setAreaCharge(0)
    }
  }



  return (
    <div className="tp-checkout-place white-bg">
      <h3 className="tp-checkout-place-title">Your Order</h3>

      <div className="tp-order-info-list">
        <ul>
          {/*  header */}
          <li className="tp-order-info-list-header">
            <h4>Product</h4>
            <h4>Total</h4>
          </li>

          {/*  item list */}
          {cart_products.map((item) => (
            <li key={item._id} className="tp-order-info-list-desc">
              <p>
                {item.title} <span> x {item.orderQuantity}</span>
              </p>
              <span>৳{item.price.toFixed(2)}</span>
            </li>
          ))}

          {/*  shipping */}

          <li>
            <div dangerouslySetInnerHTML={{ __html: note }} />
          </li>


          <li className="tp-order-info-list-shipping">
            <span>Shipping</span>
            <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
              <span>
                <input
                  {...register(`shippingOption`, {
                    required: `Shipping Option is required!`,
                  })}
                  id="flat_shipping"
                  type="radio"
                  name="shippingOption"
                />
                <label
                  onClick={() => {
                    calculateDeliveryCharge('inside_dhaka');
                    // handleShippingCost(Number(settings?.inside_dhaka))
                    setShippingType('inside_dhaka')
                    setShippingArea('')
                  }}
                  htmlFor="flat_shipping"
                >
                  Delivery: Inside Dhaka :<span>৳ {( totalJoQuantity== 0 && totalLeeQuantity > 1)
                  ?

                  Number(settings?.dhaka) : totalJoQuantity > 0 ? 0 : Number(settings?.inside_dhaka)
                  }</span>
                </label>
                <ErrorMsg msg={errors?.shippingOption?.message} />
              </span>
              <span>
                <input
                  {...register(`shippingOption`, {
                    required: `Shipping Option is required!`,
                  })}
                  id="flat_rate"
                  type="radio"
                  name="shippingOption"
                />
                <label
                  onClick={() => {
                     calculateDeliveryCharge('outside_dhaka');
                    // handleShippingCost(Number(settings?.outside_dhaka))
                    setShippingType('outside_dhaka')
                    setShippingArea('')
                    // setAreaCharge(0)

                  }}
                  htmlFor="flat_rate"
                >
                  Delivery: Out Side Dhaka: <span>৳{ totalJoQuantity== 0 && totalLeeQuantity > 1 ?

                  Number(settings?.dhaka) : totalJoQuantity > 0 ? 0 : Number(settings?.outside_dhaka)} </span>
                </label>
                <ErrorMsg msg={errors?.shippingOption?.message} />
              </span>
            </div>
          </li>

          {/* {
            shippingType ==='inside_dhaka' &&

          <li className="tp-order-info-list-shipping">
            <label

                >
                  <span>Select Area</span>
                </label>
                  <select
                    style={{width: '60%'}}
                    onChange={(e) => handleShippingArea(e.target.value)}
                  >
                    <option value="">Select Area</option>
                    {
                      areas?.map((area) => (
                        <option key={area._id} value={area.name}>{area.name} - Charge =({area.charge})TK</option>
                      ))
                    }
                  </select>
          </li>
  } */}
           {/*  subtotal */}
           <li className="tp-order-info-list-subtotal">
            <span>Subtotal</span>
            <span>৳{total}</span>
          </li>

           {/*  shipping cost */}
           <li className="tp-order-info-list-subtotal">
            <span>Shipping Cost</span>
            <span>৳{shippingCost+areaCharge}</span>
          </li>

           {/* discount */}
           <li className="tp-order-info-list-subtotal">
            <span>Discount</span>
            <span>৳{discountAmount}</span>
          </li>

          {/* total */}
          <li className="tp-order-info-list-total">
            <span>Total</span>
            <span>৳{parseFloat(cartTotal)+areaCharge}</span>
          </li>
        </ul>
      </div>
      <div className="tp-checkout-payment">



        <div className="tp-checkout-payment-item">
          <input
            {...register(`payment`, {
              required: `Payment Option is required!`,
            })}
            type="radio"
            id="back_transfer"
            name="payment"
            value="Card"
          />
          {/* sslcommerze  */}
          <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">
          SSL Commerze
          </label>

          {/* <label onClick={() => setShowCard(true)} htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">
            Credit Card
          </label>
          {showCard && (
            <div className="direct-bank-transfer">
              <div className="payment_card">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>
          )} */}
          <ErrorMsg msg={errors?.payment?.message} />
        </div>


{
  shippingType ==='inside_dhaka'  &&

        <div className="tp-checkout-payment-item">
          <input
            {...register(`payment`, {
              required: `Payment Option is required!`,
            })}
            onClick={() => setShowCard(false)}
            type="radio"
            id="cod"
            name="payment"
            value="COD"
          />
          <label htmlFor="cod">Cash on Delivery</label>
          <ErrorMsg msg={errors?.payment?.message} />
        </div>
        }
      </div>

      <div className="tp-checkout-btn-wrapper">
        <button
          type="submit"
          disabled={!stripe || isCheckoutSubmit}
          className="tp-checkout-btn w-100"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderArea;
