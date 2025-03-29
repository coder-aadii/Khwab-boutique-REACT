import React from 'react';
import './css/main.css';

const NewArrivalsSection = () => {
  return (
    <section className="new-arrivals py-5">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <div className="row g-4">
          {/* New Arrival Items */}
          <div className="col-md-3">
            <div className="product-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743163061/Gemini_Generated_Image_dn9t1dn9t1dn9t1d_jcuo6b.jpg" alt="New Arrival 1" />
              <h4>Designer Gown</h4>
              <p className="price">₹15,999</p>
              <button className="btn-add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743163061/Gemini_Generated_Image_dn9t1dn9t1dn9t1d_jcuo6b.jpg" alt="New Arrival 1" />
              <h4>Designer Gown</h4>
              <p className="price">₹15,999</p>
              <button className="btn-add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743163061/Gemini_Generated_Image_dn9t1dn9t1dn9t1d_jcuo6b.jpg" alt="New Arrival 1" />
              <h4>Designer Gown</h4>
              <p className="price">₹15,999</p>
              <button className="btn-add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743163061/Gemini_Generated_Image_dn9t1dn9t1dn9t1d_jcuo6b.jpg" alt="New Arrival 1" />
              <h4>Designer Gown</h4>
              <p className="price">₹15,999</p>
              <button className="btn-add-to-cart">Add to Cart</button>
            </div>
          </div>
          
          {/* Add more new arrival items here */}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
