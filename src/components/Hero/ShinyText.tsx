'use client'

import React from 'react'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = ''
}) => {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`inline-block ${disabled ? '' : 'animate-pulse'} ${className}`}
      style={{
        background: disabled
          ? 'none'
          : 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: disabled ? 'inherit' : 'transparent',
        animation: disabled ? 'none' : `shiny ${animationDuration} ease-in-out infinite`,
      }}
    >
      {text}
      <style jsx>{`
        @keyframes shiny {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  )
}

export default ShinyText