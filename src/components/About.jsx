import React from 'react';

function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      specialty: 'Brand Design & Strategy',
      bio: '10+ years of experience in visual identity and brand development'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      specialty: 'Full-Stack Development',
      bio: 'Expert in modern web technologies and scalable solutions'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Senior Photographer',
      specialty: 'Commercial & Product Photography',
      bio: 'Award-winning photographer with global client portfolio'
    },
    {
      name: 'David Park',
      role: 'UX/UI Designer',
      specialty: 'User Experience Design',
      bio: 'Creating intuitive and beautiful digital experiences'
    }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Design',
      description: 'Brand identity, UI/UX, illustrations, and graphic design'
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Web applications, e-commerce, mobile apps, and custom solutions'
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Product, commercial, corporate, and event photography'
    },
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'Corporate videos, promotional content, and social media'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Social media, content creation, and campaign management'
    },
    {
      icon: '✏️',
      title: 'Content Creation',
      description: 'Copywriting, storytelling, and creative content strategy'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            About Creative Collective
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Creative Collective is more than just a creative agency—we're a carefully 
                curated community of exceptional talent. Founded in 2020, we bring together 
                independent creators who share a commitment to quality, innovation, and 
                professional excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our unique structure allows us to maintain the agility and creativity of 
                independent professionals while providing our clients with the reliability 
                and comprehensive service of a full-service agency. Each member of our 
                collective brings specialized expertise and a proven track record in their field.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in collaboration over competition, quality over quantity, and 
                building lasting relationships with our clients. When you work with Creative 
                Collective, you're not just hiring a service provider—you're gaining a 
                dedicated partner invested in your success.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-indigo-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{member.specialty}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600">
                We're committed to delivering work that exceeds expectations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h4>
              <p className="text-gray-600">
                We work together to create solutions greater than the sum of our parts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We stay ahead of trends while focusing on timeless quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
