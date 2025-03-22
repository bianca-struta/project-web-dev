import React from 'react';
import { Award, Target, Clock } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We're a team of passionate developers and designers creating
            exceptional digital experiences for forward-thinking clients.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At ModernSolutions, we're driven by a simple but powerful mission:
                to help businesses thrive in the digital age through innovative
                web solutions.
              </p>
              <p className="text-gray-600">
                We combine technical expertise with creative design to deliver
                websites and applications that not only look great but also
                perform exceptionally well.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, paying attention to
                even the smallest details.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, embracing new technologies and
                approaches to solve complex problems.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-600">
                We deliver on time and on budget, maintaining clear communication
                throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Developer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'UI/UX Designer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Project Manager',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;