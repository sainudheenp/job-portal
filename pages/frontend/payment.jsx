// components/MakePaymentComponent.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MakePaymentComponent = () => {
  const router = useRouter();

  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/razorpay`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taxAmt: 99,
      }),
    }).then((t) => t.json());

    const amountInPaise = Math.ceil(data.amount * 100); // Convert amount to paise
    const key = "rzp_test_KK4UktB22pe2sp";

    var options = {
      key: key,
      name: "Hire-ALL",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you for Registering",
      image: "https://w7.pngwing.com/pngs/925/749/png-transparent-mobile-payment-business-mobile-phones-money-payment-text-service-people-thumbnail.png",
      handler: function (response) {
        // Redirect after successful payment
        router.push('/auth/login'); // Use the router to navigate without the confirmation prompt
      },
      prefill: {
        name: "your name",
        email: "demo@mail.com",
        contact: '9876543210',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <button onClick={makePayment} className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full text-3xl">
          Pay ₹99 now
        </button>

        <div className="mt-4">
          {/* Using Link without an <a> child */}
          <Link href="/auth/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default MakePaymentComponent;
