import React from 'react';
import { ArrowRight, Code, Laptop, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Building Digital Excellence
            </h1>
            <p className="text-xl mb-8">
              Transform your ideas into reality with our cutting-edge web solutions.
              We create beautiful, functional, and scalable applications.
            </p>
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Code className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Clean Code</h3>
              <p className="text-gray-600">
                We write maintainable, scalable, and efficient code that follows
                best practices and industry standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Laptop className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Modern Design</h3>
              <p className="text-gray-600">
                Beautiful, responsive interfaces that work seamlessly across all
                devices and screen sizes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">User-Focused</h3>
              <p className="text-gray-600">
                We prioritize user experience and accessibility in everything we
                build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today
            for a free consultation.
          </p>
          <Link to="/contact" className="btn bg-white text-indigo-600 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;