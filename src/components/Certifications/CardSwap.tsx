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
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const currentX = e.clientX
    const diff = startX - currentX
    setDragOffset(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    const threshold = 50 // Minimum drag distance to change slide
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged left, go to next
        setCurrentIndex((prev) => (prev + 1) % children.length)
      } else {
        // Dragged right, go to previous
        setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
      }
    }

    setIsDragging(false)
    setDragOffset(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
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
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${isDragging ? dragOffset : 0}px))`
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full max-w-md mx-auto flex-shrink-0 px-4">
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex gap-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-200 hover:scale-110 ${
                index === currentIndex ? 'bg-gray-800 scale-110' : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSwap