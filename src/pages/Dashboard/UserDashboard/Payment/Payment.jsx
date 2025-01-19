import { Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

 

  return (
    <div>
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <h3 className='text-3xl uppercase border-y-4 py-4'>Payment</h3>
        </div>
      <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
