'use client'

import SectionHeading from '../SectionHeading/SectionHeading'
import NeonCrystalCity from './NeonCrystalCity'

const TestimonialSection = () => {
  return (
    <section id="testimonials">
      <SectionHeading
        title="// Testimonials"
        subtitle="Don't just take our word for it - see what actual users of our service have to say about their experience."
      />

      <div className="my-8 h-96">
        <NeonCrystalCity />
      </div>
    </section>
  )
}

export default TestimonialSection
