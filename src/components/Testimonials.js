import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    text: "TaskRabbit made my move so much easier! The Tasker was professional, on time, and handled everything with care. I'll definitely use this service again.",
    author: "Sarah Johnson",
    location: "San Francisco, CA",
    service: "Moving Help",
    rating: 5
  },
  {
    text: "I needed my IKEA furniture assembled and found the perfect Tasker. They were skilled, efficient, and my furniture looks perfect. Highly recommend!",
    author: "Michael Chen",
    location: "New York, NY",
    service: "Furniture Assembly",
    rating: 5
  },
  {
    text: "The cleaning service was outstanding. My house has never looked better! The Tasker was thorough, reliable, and very professional.",
    author: "Emily Rodriguez",
    location: "Los Angeles, CA",
    service: "Home Cleaning",
    rating: 5
  },
  {
    text: "I was skeptical at first, but TaskRabbit exceeded my expectations. The handyman fixed multiple issues around my house quickly and affordably.",
    author: "David Thompson",
    location: "Chicago, IL",
    service: "Handyman",
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What our customers say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what real customers have to say about their TaskRabbit experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-location">{testimonial.location}</div>
                  <div className="author-service">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Average rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500K+</div>
            <div className="stat-label">Happy customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Tasks completed successfully</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
