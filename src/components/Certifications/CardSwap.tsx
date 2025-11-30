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
      {children}
    </div>
  )
}

const CardSwap: React.FC<CardSwapProps> = ({
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  children
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (pauseOnHover && isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
    }, delay)

    return () => clearInterval(interval)
  }, [children.length, delay, pauseOnHover, isPaused])

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  return (
    <div
      className="relative flex justify-center items-center"
      style={{ height: '600px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children.map((child, index) => {
        const isActive = index === currentIndex
        const offset = (index - currentIndex) * cardDistance
        const verticalOffset = Math.abs(index - currentIndex) * verticalDistance

        return (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${
              isActive ? 'z-10 scale-105' : 'z-0 scale-95 opacity-70'
            }`}
            style={{
              transform: `translateX(${offset}px) translateY(${verticalOffset}px)`,
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default CardSwap