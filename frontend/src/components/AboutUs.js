import React from 'react';
// import './css/AboutUs.css'; // Importing the CSS file for styling

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <h2 className="mb-3">About Me, Khudeja Nawab</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead fs-4 mb-3 mb-xl-5">
              Hello, I’m Khudeja Nawab, and for over 14 years, I’ve been deeply immersed in the fashion industry,
              creating designs that reflect both my passion for style and my dedication to craftsmanship. From a young
              age, I fell in love with fashion, and this love turned into a calling that led me to establish my own
              boutique, "KHWAB".
            </p>
            <p className="fs-5 mb-3 mb-xl-5">
              Over the years, I’ve built a reputation for creating high-quality, custom-made outfits that truly capture
              the essence of my clients' personalities. Whether it’s a bridal collection or an everyday wear piece, I
              take pride in crafting designs that make a lasting impression. My boutique has become a trusted destination
              for those seeking to bring a bit of magic into their wardrobe.
            </p>
            <p className="fs-5 mb-4 mb-xl-5">
              At KHWAB, I continue to innovate, constantly exploring new ideas and techniques while staying rooted in
              tradition. Fashion for me is not just a profession—it’s a passion. It’s this passion that drives me to
              create designs that are not only beautiful but also meaningful. I hope you can see the love and dedication
              that goes into every piece I make.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/deoegf9on/image/upload/v1743159137/khudeja-nawab_nnwvkd.jpg" 
              alt="Khudeja Nawab"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
