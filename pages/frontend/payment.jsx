//components->MakePaymentComponent.js
import React from 'react'
import Link from 'next/link';


const MakePaymentComponent = () => {
    const makePayment = async () => {
        //console.log("here...");
        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
        // Make API call to the serverless API
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/razorpay`,
        {
             method: "POST",
             headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                taxAmt:99
             })
         }
        )
        .then((t) =>
          t.json()
        );
        const amountInPaise = Math.ceil(data.amount * 100); // Convert amount to paise
const key = "rzp_test_KK4UktB22pe2sp"
        //console.log(data);
        var options = {
          key: key, // Enter the Key ID generated from the Dashboard
          name: "Hire-ALL",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for Registering",
          image: "https://w7.pngwing.com/pngs/925/749/png-transparent-mobile-payment-business-mobile-phones-money-payment-text-service-people-thumbnail.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            // alert("Razorpay Response: "+response.razorpay_payment_id);
            //alert(response.razorpay_order_id);
            //alert(response.razorpay_signature);
          },
          prefill: {
            name:"your name",
            email:"demo@mail.com",
            contact:'9876543210'

          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);

          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };

          document.body.appendChild(script);
        });
      }
  return (
    <div  classname="grid h-screen place-items-center">
        {/* <button onClick={()=>makePayment()}>Pay 99 now</button> */}
        <div className="flex flex-col items-center justify-center h-screen">
          
      <button onClick={()=>makePayment()} className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full text-3xl">
        Pay ₹99 now
      </button>
      
      <div className="mt-4">
          <Link href={'/auth/login'} className="text-black hover:underline">Back to Login
          </Link>
        </div>
    </div>
    </div>
  )
}
export default MakePaymentComponent 
