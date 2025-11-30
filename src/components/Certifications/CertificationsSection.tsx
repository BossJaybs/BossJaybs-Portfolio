'use client'

import SectionHeading from '../SectionHeading/SectionHeading'
import CardSwap, { Card } from './CardSwap'

const CertificationsSection = () => {
  return (
    <section id="certifications">
      <SectionHeading
        title="// Certifications"
        subtitle="View my professional certifications and achievements."
      />

      <div className="my-8">
        <div style={{ height: '600px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card pdfUrl="/path/to/cert1.pdf">
              <h3>Certification 1</h3>
              <p>React Developer Certification</p>
            </Card>
            <Card pdfUrl="/path/to/cert2.pdf">
              <h3>Certification 2</h3>
              <p>Node.js Certification</p>
            </Card>
            <Card pdfUrl="/path/to/cert3.pdf">
              <h3>Certification 3</h3>
              <p>TypeScript Certification</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection