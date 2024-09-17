"use client"
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
      onClick={onClick}
    >
      <span className="font-medium">{title}</span>
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
          }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'
        }`}
    >
      <div className="p-4 bg-gray-50">{content}</div>
    </div>
  </div>
);

const SampleAccordion = () => {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };

  const items = [
    {
      title: 'Checkbox',
      content: 'Pure CSS accordion based on the "input:checked + label" style trick.',
    },
    {
      title: 'Open multiple',
      content: 'Using React state allows to have several tabs open at the same time.',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.includes(index)}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default SampleAccordion;