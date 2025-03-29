import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const navigate = useNavigate();
  

  const blogPosts = [
    {
      id: 1,
      title: "Summer Fashion Trends",
      excerpt: "Discover the hottest trends for this summer season...",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179456/Gemini_Generated_Image_6v6ap6v6ap6v6ap6_qelgzx.jpg",
      slug: "summer-trends"
    },
    {
      id: 2,
      title: "Spring Collection Highlights",
      excerpt: "Explore our curated spring collection essentials...",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179605/Gemini_Generated_Image_64d5yf64d5yf64d5_r3fd5p.jpg",
      slug: "spring-collection"
    },
    {
      id: 3,
      title: "Style Guide: Evening Wear",
      excerpt: "Tips and tricks for perfect evening attire...",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179456/Gemini_Generated_Image_6v6ap6v6ap6v6ap6_qelgzx.jpg",
      slug: "evening-wear-guide"
    },
    {
      id: 4,
      title: "Accessorizing 101",
      excerpt: "Master the art of accessorizing your outfits...",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179605/Gemini_Generated_Image_64d5yf64d5yf64d5_r3fd5p.jpg",
      slug: "accessorizing-tips"
    }
  ];

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section className="blog py-5">
      <div className="container">
        <h2 className="section-title">Fashion Blog & Style Guide</h2>
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-3">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="blog-image"
                  />
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button 
                    onClick={() => handleReadMore(post.slug)}
                    className="btn-read-more"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
