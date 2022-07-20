import Stripe from "stripe";

// create a singleton instance
export const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: "2020-08-27",
});
