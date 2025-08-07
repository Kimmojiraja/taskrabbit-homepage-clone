import React from 'react';
import '../styles/ServiceCategories.css';

const categories = [
  {
    name: 'Furniture Assembly',
    description: 'Get help assembling your furniture quickly and correctly',
    popular: true
  },
  {
    name: 'Home Cleaning',
    description: 'Professional cleaning services for your home',
    popular: true
  },
  {
    name: 'Moving Help',
    description: 'Loading, unloading, and moving assistance',
    popular: false
  },
  {
    name: 'Handyman',
    description: 'General repairs and maintenance around your home',
    popular: true
  },
  {
    name: 'Mounting & Installation',
    description: 'TV mounting, shelving, and other installations',
    popular: false
  },
  {
    name: 'Yard Work',
    description: 'Landscaping, gardening, and outdoor maintenance',
    popular: false
  },
  {
    name: 'Personal Assistant',
    description: 'Administrative tasks and personal errands',
    popular: false
  },
  {
    name: 'Delivery',
    description: 'Pick up and delivery services for your items',
    popular: true
  }
];

const ServiceCategories = () => {
  const handleCategoryClick = (categoryName) => {
    console.log(`Selected category: ${categoryName}`);
    // Handle category selection logic here
  };

  return (
    <section className="service-categories" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Popular services</h2>
          <p className="section-subtitle">
            Choose from hundreds of services to get help with your everyday tasks
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-card ${category.popular ? 'popular' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.popular && <div className="popular-badge">Popular</div>}
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              <div className="category-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">
            View all services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
