'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(currentIndex * (carouselRef.current?.clientWidth || 1))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    const newScrollLeft = scrollLeft - walk
    const maxScroll = (children.length - 1) * (carouselRef.current?.clientWidth || 1)

    if (newScrollLeft >= 0 && newScrollLeft <= maxScroll) {
      const newIndex = Math.round(newScrollLeft / (carouselRef.current?.clientWidth || 1))
      setCurrentIndex(Math.max(0, Math.min(children.length - 1, newIndex)))
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div
        className="flex justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full max-w-md mx-auto flex-shrink-0 px-4">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSwap