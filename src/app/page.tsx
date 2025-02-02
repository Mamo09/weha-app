'use client';  
import React from 'react';  
import Portfolio from './components/portfolio';  
import Image from 'next/image';



const Hero: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Weharima<span className="text-accent">.</span>
            </div>
            <div>
              
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Find your <span className="text-primary">Design</span> stuff for your room
              </h1>
              <div className="w-20 h-2 bg-secondary"></div>
              <p className="text-xl mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.
              </p>
            </div>
          </header>
        </div>
      </div>
      <Image
        src="/assets/img/heroimg.png"
        alt="Leafs"
        width={300}
        height={300}
        className="w-full object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
};


const Layanan: React.FC = () => {
  return ( <div>ini layanan</div>)
}

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Comprehensive Expertise",
      description:
        "From architecture to interior design and 3D visualization, we provide end-to-end solutions tailored to your needs.",
    },
    {
      id: 2,
      title: "Tailored Design Solutions",
      description:
        "We collaborate closely with you to create designs that reflect your unique vision and functional requirements.",
    },
    {
      id: 3,
      title: "Cutting-Edge Visualization",
      description:
        "Our photorealistic 3D renderings bring your ideas to life, helping you visualize the final result before construction begins.",
    },
    {
      id: 4,
      title: "Attention to Detail",
      description:
        "Every detail is meticulously crafted to ensure your space is not only beautiful but also functional and sustainable.",
    },
    {
      id: 5,
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is our priority. We maintain transparent communication and ensure a smooth, stress-free process.",
    },
    {
      id: 6,
      title: "Timely Delivery",
      description:
        "We respect your deadlines and deliver high-quality results on time, without compromising creativity or precision.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fbfaf4] to-[#ffdf9c] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Why Choose Us?
        </h2>
        <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
          At <a className="text-accent font-semibold">Weharima</a>, we pride ourselves on delivering exceptional architectural and design solutions tailored to your unique vision. Here’s why we stand out as the ideal partner for your next project
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <WhyChooseUsCard key={card.id} id={card.id} title={card.title} description={card.description} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-grey-800 black mb-8">
            Ready to bring your vision to life? Let’s create something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
};

interface WhyChooseUsCardProps {
  id: number;
  title: string;
  description: string;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative">
      <div className="absolute -top-6 left-6 text-black bg-accent w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
        {id}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-black text-center font-normal" >{description}</p>
    </div>

    
  );
};


// Define the Step interface
interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

// Define the props for the IntegrationProcess component
interface IntegrationProcessProps {
  title: string;
  description: string;
  steps: Step[];
  demoLink: string;
  supportEmail: string;
}

// IntegrationProcess component
const IntegrationProcess: React.FC<IntegrationProcessProps> = ({
  title,
  description,
  steps,
  demoLink,
  supportEmail,
}) => {
  return (
    <div className="bg-indigo-800 dark:bg-gray-800 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl sm:text-center mb-14">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
          <p className="mt-2 text-lg sm:text-center leading-8 text-gray-300">
            {description}{' '}
            <a
              className="text-custom-primary font-medium"
              target="_blank"
              href={demoLink}
              rel="noopener noreferrer"
            >
              watch a demonstration here
            </a>{' '}
            or contact our{' '}
            <a className="text-custom-primary font-medium" href={`mailto:${supportEmail}`}>
              support team
            </a>
            .
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.stepNumber}>
              <div className="flex items-center text-sm font-semibold leading-6 text-blue-400">
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Step {step.stepNumber}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500/80 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </div>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-wide text-white">{step.title}</p>
              <p className="mt-1 text-base leading-7 text-gray-300 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component
const ProjectStages: React.FC = () => {
  const steps: Step[] = [
    {
      stepNumber: 1,
      title: 'Create an Account:',
      description: 'Get started by registering for an account. No complex onboarding processes.',
    },
    {
      stepNumber: 2,
      title: 'Choose Features:',
      description: 'Select from a variety of features and functionalities tailored to your needs.',
    },
    {
      stepNumber: 3,
      title: 'Customize Settings:',
      description: 'Tailor the platform to your preferences. Define settings, alerts, and integrations.',
    },
    {
      stepNumber: 4,
      title: 'Activate and Explore:',
      description: 'Activate your account and start exploring the possibilities of our platform.',
    },
  ];

  return (
    <div>
      <IntegrationProcess
        title="Effortless Integration"
        description="Experience seamless integration with our platform. If you encounter any issues with the integration process,"
        steps={steps}
        demoLink="https://app.example-service.io/demo"
        supportEmail="support@example-service.io"
      />
    </div>
  );
};



const HomePage: React.FC = () => {
  return (
    <div className='bg-[#fbf9f3]'>
      
      <Hero />
      <Layanan/>
      <Portfolio/>
      <WhyChooseUs/>
      <ProjectStages/>
      
    </div>
  );
};

export default HomePage;