//components->MakePaymentComponent.js
import React from 'react'

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
                taxAmt:1000
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
          name: "Indradhanu.online",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for your test donation",
          image: "https://manuarora.in/logo.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert("Razorpay Response: "+response.razorpay_payment_id);
            //alert(response.razorpay_order_id);
            //alert(response.razorpay_signature);
          },
          prefill: {
            name:"pradeep das",
            email:"admin@indradhanu.online",
            contact:'9853785519'

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
    <div>
        <button onClick={()=>makePayment()}>Pay 100 now</button>
    </div>
  )
}
export default MakePaymentComponent 