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
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  // Auto-play functionality
  useEffect(() => {
    const goToNext = () => {
      goToSlide((currentIndex + 1) % children.length)
    }

    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, children.length])

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <div className="max-w-md w-full px-4">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center text-sm font-semibold ${
                index === currentIndex
                  ? 'bg-accent text-white scale-110 shadow-lg'
                  : 'bg-white/60 text-gray-700 hover:bg-white/80'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSwap