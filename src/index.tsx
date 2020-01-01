import * as React from "react";
import { render } from "react-dom";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

import "./styles.css";

function App() {
  return (
    <StripeProvider apiKey="pk_test_3Bf52x6gsCeFv9gOTeIA5tbA00An1Wjb4Y">
      <div className="example">
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
