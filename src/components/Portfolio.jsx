import React, { useState } from 'react';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample portfolio items - replace with actual data
  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      creator: 'Sarah Johnson',
      description: 'Complete brand identity for tech startup'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      creator: 'Michael Chen',
      description: 'Full-stack e-commerce solution'
    },
    {
      id: 3,
      title: 'Product Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
      creator: 'Emma Rodriguez',
      description: 'Premium product photography series'
    },
    {
      id: 4,
      title: 'Mobile App UI/UX',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      creator: 'David Park',
      description: 'Modern mobile application interface'
    },
    {
      id: 5,
      title: 'Corporate Video Production',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop',
      creator: 'Lisa Thompson',
      description: 'Corporate promotional video'
    },
    {
      id: 6,
      title: 'Marketing Website',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      creator: 'James Wilson',
      description: 'Responsive marketing website'
    },
    {
      id: 7,
      title: 'Illustration Series',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop',
      creator: 'Olivia Martinez',
      description: 'Custom illustration collection'
    },
    {
      id: 8,
      title: 'Social Media Campaign',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      creator: 'Ryan Adams',
      description: 'Multi-platform social media content'
    },
    {
      id: 9,
      title: 'Web Application Dashboard',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      creator: 'Sophia Lee',
      description: 'Analytics dashboard interface'
    }
  ];

  const categories = ['all', 'design', 'development', 'photography', 'video'];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of creative work from our talented team members
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-2">{item.description}</p>
                <p className="text-indigo-300 text-sm font-semibold">
                  Created by: {item.creator}
                </p>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm text-indigo-600 font-medium">By {item.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
