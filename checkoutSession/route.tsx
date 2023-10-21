import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  email: string;
  codingExperience: string;
  careerPath: string;
  goals: string;
  interviewTime: string[];
}

export  async function POST(
    request: Request
) {
    const body = await request.json();
    console.log(body)
    const { firstName, lastName,city,state,address,phone,email } = body;
    const search_result = firstName + ' ' + lastName + ' ' + email + ' ' + city + ' ' + state
    // Calculate the total amount for the checkout session (you can change this according to your logic)
    const totalAmount = 4000; // $25.00 in cents

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: search_result,
              },
              unit_amount: totalAmount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/apply`,
      });
      console.log(session)
        return NextResponse.json(session);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      NextResponse.json({ statusCode: 500, message: errorMessage });
    }
  } 