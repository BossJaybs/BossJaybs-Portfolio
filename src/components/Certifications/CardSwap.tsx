'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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
  coverImage?: string
}

export const Card: React.FC<CardProps> = ({ children, pdfUrl, coverImage }) => {
  const handleClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank')
    }
  }

  return (
    <div
      className="bg-secondary p-6 md:p-8 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 mx-auto max-w-md md:max-w-lg flex flex-col items-center"
      onClick={handleClick}
    >
      <div className="w-full h-72 md:h-80 bg-black rounded-md mb-6 flex items-center justify-center overflow-hidden p-3">
        {coverImage ? (
          <Image
            src={coverImage}
            alt="Certificate cover"
            width={360}
            height={270}
            className="max-w-full max-h-full object-contain rounded"
          />
        ) : (
          <span className="text-gray-500">Certificate Cover</span>
        )}
      </div>
      <div className="text-center w-full">
        {children}
      </div>
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
            <div key={index} className="w-full flex-shrink-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default CardSwap