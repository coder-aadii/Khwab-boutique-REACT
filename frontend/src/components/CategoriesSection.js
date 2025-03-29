import React from 'react';
import './css/main.css';

const CategoriesSection = () => {
  return (
    <section className="categories py-5">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="category-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743176106/Gemini_Generated_Image_mawuclmawuclmawu_pxhewb.jpg" alt="Dresses" />
              <h3>Dresses</h3>
              <a href="/category/dresses" className="category-link">View All</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743162341/images_nmt3nd.jpg" alt="Accessories" />
              <h3>Accessories</h3>
              <a href="/category/accessories" className="category-link">View All</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743162738/Gemini_Generated_Image_n4x26ln4x26ln4x2_nducjg.jpg" alt="Accessories" />
              <h3>Luxury Gowns</h3>
              <a href="/category/accessories" className="category-link">View All</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <img src="https://res.cloudinary.com/deoegf9on/image/upload/v1743162876/Gemini_Generated_Image_1zk8nh1zk8nh1zk8_j2td7r.jpg" alt="Accessories" />
              <h3>Casual Wears</h3>
              <a href="/category/accessories" className="category-link">View All</a>
            </div>
          </div>
          {/* Add more categories as needed */}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
