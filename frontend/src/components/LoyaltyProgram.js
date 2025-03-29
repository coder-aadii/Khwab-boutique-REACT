import React from 'react';
import './css/main.css';
import './css/LoyaltyProgram.css';

const LoyaltyProgram = () => {
  return (
    <>
      <section className="loyalty-program">
        <div className="container">
          <h2 className="section-title">Join Our Loyalty Program</h2>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="image-wrapper">
                <img
                  src="https://res.cloudinary.com/deoegf9on/image/upload/v1743183157/LoyaltyProgram_efrwvi.jpg"
                  alt="Loyalty Program"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-5">
              <h3>Become a VIP Khwab Member</h3>
              <ul className="benefits-list">
                <li>
                  <i className="fas fa-gift"></i>
                  <span>Earn points on every purchase</span>
                </li>
                <li>
                  <i className="fas fa-tag"></i>
                  <span>Exclusive member discounts</span>
                </li>
                <li>
                  <i className="fas fa-crown"></i>
                  <span>Early access to seasonal sales</span>
                </li>
                <li>
                  <i className="fas fa-birthday-cake"></i>
                  <span>Special birthday rewards</span>
                </li>
              </ul>
              <form className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </form>
              <button className="btn-join-now">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default LoyaltyProgram;
