import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/css/main.css';

const Blog = () => {
  const { slug } = useParams();
  const blogPosts = [
    {
      id: 1,
      title: "Summer Fashion Trends 2024",
      category: "Fashion Trends",
      date: "March 15, 2024",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179456/Gemini_Generated_Image_6v6ap6v6ap6v6ap6_qelgzx.jpg",
      excerpt: "Discover the hottest trends that will dominate the fashion scene this summer. From vibrant colors to must-have accessories...",
      author: "Khudeja Nawab",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Art of Accessorizing",
      category: "Style Guide",
      date: "March 12, 2024",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179605/Gemini_Generated_Image_64d5yf64d5yf64d5_r3fd5p.jpg",
      excerpt: "Learn how to elevate your outfit with the perfect accessories. Tips and tricks for creating balanced looks...",
      author: "Khudeja Nawab",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Sustainable Fashion: A Guide",
      category: "Sustainability",
      date: "March 10, 2024",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179456/Gemini_Generated_Image_6v6ap6v6ap6v6ap6_qelgzx.jpg",
      excerpt: "Explore how to build a sustainable wardrobe while staying stylish. Tips for eco-friendly fashion choices...",
      author: "Khudeja Nawab",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Evening Wear Essentials",
      category: "Style Guide",
      date: "March 8, 2024",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179605/Gemini_Generated_Image_64d5yf64d5yf64d5_r3fd5p.jpg",
      excerpt: "Your complete guide to mastering evening wear. From cocktail dresses to formal gowns...",
      author: "Khudeja Nawab",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Spring Wardrobe Refresh",
      category: "Fashion Tips",
      date: "March 5, 2024",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179456/Gemini_Generated_Image_6v6ap6v6ap6v6ap6_qelgzx.jpg",
      excerpt: "Get ready for spring with these wardrobe refresh tips. Learn how to transition your closet...",
      author: "Khudeja Nawab",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Color Coordination Guide",
      category: "Style Guide",
      date: "March 3, 2024",
      image: "https://res.cloudinary.com/deoegf9on/image/upload/v1743179605/Gemini_Generated_Image_64d5yf64d5yf64d5_r3fd5p.jpg",
      excerpt: "Master the art of color coordination in your outfits. Understanding color theory for fashion...",
      author: "Khudeja Nawab",
      readTime: "7 min read"
    }
  ];

  // Find the specific blog post if a slug is provided
  const blogPost = slug ? blogPosts.find(post => post.id === parseInt(slug)) : null;

  // Render single blog post view if slug is provided and post exists
  if (slug && blogPost) {
    return (
      <div className="blog-page">
        <Navbar />
        
        {/* Single Blog Post Content */}
        <section className="blog-content py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="blog-meta mb-3">
                  <span className="blog-category">{blogPost.category}</span>
                  <span className="blog-date">{blogPost.date}</span>
                </div>
                <h1 className="blog-title mb-4">{blogPost.title}</h1>
                <div className="blog-author mb-4">
                  <span>{blogPost.author}</span>
                  <span className="blog-read-time">{blogPost.readTime}</span>
                </div>
                <div className="blog-featured-image mb-4">
                  <img src={blogPost.image} alt={blogPost.title} className="img-fluid rounded" />
                </div>
                <div className="blog-full-content">
                  <p>{blogPost.excerpt}</p>
                  <p>This is the full content of the blog post. The content would be much longer in a real implementation.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="related-posts py-5 bg-light">
          <div className="container">
            <h2 className="mb-4">Related Posts</h2>
            <div className="row g-4">
              {blogPosts
                .filter(post => post.id !== parseInt(slug) && post.category === blogPost.category)
                .slice(0, 3)
                .map(post => (
                  <div key={post.id} className="col-md-4">
                    <article className="blog-card h-100">
                      <div className="blog-image-container">
                        <img src={post.image} alt={post.title} className="blog-image" />
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="blog-category">{post.category}</span>
                          <span className="blog-date">{post.date}</span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="blog-footer">
                          <a href={`/blog/${post.id}`} className="btn-read-more">
                            Read More →
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Render blog listing view if no ID is provided or post doesn't exist
  return (
    <div className="blog-page">
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="container text-center py-5">
          <h1 className="display-4">Fashion Blog & Style Guide</h1>
          <p className="lead">Discover the latest trends, style tips, and fashion inspiration</p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="blog-categories py-4">
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <button className="btn btn-outline-dark active">All</button>
            <button className="btn btn-outline-dark">Fashion Trends</button>
            <button className="btn btn-outline-dark">Style Guide</button>
            <button className="btn btn-outline-dark">Sustainability</button>
            <button className="btn btn-outline-dark">Fashion Tips</button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts py-5">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map(post => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <article className="blog-card h-100">
                  <div className="blog-image-container">
                    <img src={post.image} alt={post.title} className="blog-image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-footer">
                      <div className="blog-author">
                        <span>{post.author}</span>
                        <span className="blog-read-time">{post.readTime}</span>
                      </div>
                      <a href={`/blog/${post.id}`} className="btn-read-more">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 bg-light">
        <div className="container text-center">
          <h2>Subscribe to Our Newsletter</h2>
          <p className="mb-4">Stay updated with our latest style guides and fashion tips</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="d-flex gap-2">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  required 
                />
                <button type="submit" className="btn btn-dark">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
