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
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    if (pdfUrl) {
      setShowModal(true)
    }
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div
        className="bg-secondary p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
        onClick={handleClick}
      >
        <div className="w-full h-64 bg-white rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-500">Certificate Cover</span>
        </div>
        {children}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 z-10"
            >
              ×
            </button>
            <iframe
              src={pdfUrl}
              className="w-full h-[80vh] rounded-lg"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </>
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