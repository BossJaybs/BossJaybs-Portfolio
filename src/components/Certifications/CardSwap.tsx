'use client'

import React, { useState, useEffect } from 'react'

interface CardSwapProps {
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
  children: React.ReactNode[]
}

interface CardProps {
  children: React.ReactNode
  pdfUrl?: string
}

export const Card: React.FC<CardProps> = ({ children, pdfUrl }) => {
  const handleClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank')
    }
  }

  return (
    <div
      className="bg-secondary p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="w-full h-64 bg-white rounded-md mb-4 flex items-center justify-center">
        <span className="text-gray-500">Certificate Cover</span>
      </div>
      {children}
    </div>
  )
}

const CardSwap: React.FC<CardSwapProps> = ({
  children
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default CardSwap