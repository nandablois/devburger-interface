import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51T2ZNtEuGCjR64mpORm4eWFw0hPqHVoBZZGiFdAQ52SRYCxU3wCgEdBfx71NUBFaj9mWFW3ltsAHidoO1dze60D600S1q0rcMR"
);


export default stripePromise