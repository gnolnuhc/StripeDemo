import { Box } from "@material-ui/core";
import * as React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";

type CheckoutFormProps = {} & ReactStripeElements.InjectedStripeProps;

export const CheckoutForm: React.FC<CheckoutFormProps> = (
  props: CheckoutFormProps
) => {
  const handleSubmit = event => {
    // We don't want to let default form submission happen here, which would refresh the page.
    event.preventDefault();
    props.stripe
      .createToken({ type: "card", name: "Jenny Rosen" })
      .then(result => {
        console.log(result.token);
      });
  };

  const handleCardNumberChange = event => {
    console.log(event.brand);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box m={4}>
        {/* <CardNumberElement
          onChange={handleCardNumberChange}
          style={{ base: { fontSize: "18px" } }}
        /> */}
        <CardElement />
        <button>Confirm order</button>
      </Box>
    </form>
  );
};

export default injectStripe(CheckoutForm);
