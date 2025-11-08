import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="thankyou-container fade-in" style={{ marginTop: 80 }}>
      <img src="/assets/thankyou.png" alt="Thank you" className="thankyou-img" />
      <h1>Thank You for Your Support!</h1>
      <p>Your donation means a lot to HopeBridge. Together, we make a difference.</p>
      <Link to="/" className="back-home">Go Back Home</Link>
    </div>
  );
}

export default ThankYou;
