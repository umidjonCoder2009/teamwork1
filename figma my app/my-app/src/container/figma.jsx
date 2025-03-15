import React from "react";
function Navbar(props) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Beautiful food & takeaway, <span className="highlight">delivered</span> to your door.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
        </p>
        <button className="order-btn">Place an Order</button>
        <div className="rating">
          ⭐ Trustpilot <span>4.8 out of 5</span> based on 2000+ reviews
        </div>
      </div>
      <div className="hero-image">
        <img src={foodImage} alt="Food" />
        <div className="floating-icons">
          <img src={googleIcon} alt="Google" />
          <img src={appleIcon} alt="Apple" />
        </div>
      </div>
    </section>
  );




}
export default Navbar;
