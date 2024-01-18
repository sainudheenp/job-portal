//razorpay.js
const Razorpay = require("razorpay");
const shortid = require("shortid");
console.log("hi")
export default async function handler(req, res) {
  const { taxAmt } = req.body;
  //console.log('taxAmt',taxAmt*100)
  if (req.method === "POST") {
    // Initialize razorpay object
const key ='rzp_test_KK4UktB22pe2sp' ;
const secret='pUR7nCzO0DUVsnTFZs6gLMWx' ;

    const razorpay = new Razorpay({
      key_id: key,
      key_secret: secret,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = taxAmt;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}