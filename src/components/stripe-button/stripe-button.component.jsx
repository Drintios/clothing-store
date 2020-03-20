import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_3B5B7SouxO46LbrVzQdIV1xz00mCCj4PN3';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
