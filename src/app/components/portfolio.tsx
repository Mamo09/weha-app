/* eslint-disable @next/next/no-img-element */
"use client"; // Menandai file ini sebagai komponen klien

import React, { useState } from "react";


const Portfolio: React.FC = () => {
  const navLinks = [
    { name: 'All Projects', category: 'all' },
    { name: 'Architecture', category: 'architecture' },
    { name: 'Interior Design', category: 'interior design' },
    { name: 'Visualization', category: 'visualization' },
  ];
  
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1, // Unique ID
      ImageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
      category: "Architecture",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 2, // Unique ID
      ImageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
      category: "Interior Design",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 3, // Unique ID
      ImageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
      category: "Visualization",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 4, // Unique ID
      ImageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
      category: "Architecture",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 5, // Unique ID
      ImageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
      category: "Interior Design",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
    {
      id: 6, // Unique ID
      ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
      category: "Visualization",
      title: "Creative Agency",
      button: "View Details",
      buttonHref: "#",
    },
  ];

  const [showCard, setShowCard] = useState<string>("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="primary-text mb-2 block text-lg font-semibold">
                Our Portfolio
              </span>
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              {navLinks.map((link) => (
                <li className="mb-1" key={link.category}>
                  <button
                    onClick={() => handleProject(link.category)}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-normal transition md:py-3 lg:px-8 ${
                      showCard === link.category
                        ? "activeClasses bg-[#a28f65] text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#a28f65] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id} // Use unique ID here
              ImageHref={item.ImageHref}
              category={item.category}
              title={item.title}
              button={item.button}
              buttonHref={item.buttonHref}
              showCard={showCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

interface PortfolioCardProps {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/4 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px] ">
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-5 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <span className="text-balck mb-2 block text-sm font-normal">
            {category}
          </span>
          <h3 className="text-accent mb-5 text-xl font-normal">{title}</h3>
          <a
            href={buttonHref}
            className="text-body-color dark:text-dark-6 hover:border-[#a28f65] hover:bg-[#a28f65] inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-m font-normal transition hover:text-white"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

