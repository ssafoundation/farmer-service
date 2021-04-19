import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const Payment = () => {
 

  const stripe = useStripe();
  const [paymentError, setPaymentsError] = useState("");
  const [paymentSuccess, setPaymentsSuccess] = useState("");
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      setPaymentsError(error.message);
      setPaymentsSuccess(null);
    } else {
      setPaymentsSuccess(paymentMethod);
      setPaymentsError(null);
        console.log(paymentMethod);
    }
  };
    

  return (
    <div className="form-main-wrap">
      <form onSubmit={handleSubmit}>
        <div className="yourpayment-area">
          <div className="payment-title">
            <h2>Payment-area</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="client-detaile">
                <CardElement />
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!stripe}
                >
                  Payment
                </button>
              </div>
              {paymentError && <p>{paymentError}</p>}
            {paymentSuccess && <p>Your Payment Was successfull {paymentSuccess.id}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
