import React, { useEffect } from 'react';
import './css/main.css';

const CollectionsCarousel = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel
    const carousel = document.querySelector('#carouselExampleCaptions');
    if (window.bootstrap && carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000, // Auto-slide every 3 seconds
        wrap: true // Enable continuous loop
      });
    }
  }, []);

  return (
    <section id="collections" className="collections py-5">
      <div className="container">
        <h2 className="section-title mb-4">Our Collections</h2>
        <p className="section-description mb-5">
          Explore the latest trends and timeless classics in our exclusive collections.
          Curated with love and care by Khudeja Nawab.
        </p>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://res.cloudinary.com/deoegf9on/image/upload/v1743178341/Gemini_Generated_Image_3cp5o93cp5o93cp5_l6yxog.jpg"
                className="d-block w-100"
                alt="Luxury Dresses"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Luxury Dresses</h5>
                <p>Elegant, sophisticated, and perfect for any occasion. Collection of luxurious dresses.</p>
                <a href="/pages/products.html#luxury" className="btn btn-outline-light">See All</a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/deoegf9on/image/upload/v1743178344/Gemini_Generated_Image_1aiczt1aiczt1aic_zcxvvs.jpg"
                className="d-block w-100"
                alt="Casual Wear"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Casual Wear</h5>
                <p>
                  Comfortable, stylish, and casual. Perfect for everyday wear, curated for the modern
                  woman.
                </p>
                <a href="/pages/products.html#casual" className="btn btn-outline-light">See All</a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/deoegf9on/image/upload/v1743178343/Gemini_Generated_Image_ekwybwekwybwekwy_rnrtqa.jpg"
                className="d-block w-100"
                alt="Evening Gowns"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Evening Gowns</h5>
                <p>For your special nights. Our collection of evening gowns is designed to make you shine.</p>
                <a href="/pages/products.html#gowns" className="btn btn-outline-light">See All</a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsCarousel;
