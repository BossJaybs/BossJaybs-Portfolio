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
        <CardSwap>
          <Card pdfUrl="/certifications/cert1.pdf">
            <h3>React Developer Certification</h3>
            <p>Certified in React.js development with expertise in building modern web applications.</p>
          </Card>
          <Card pdfUrl="/certifications/cert2.pdf">
            <h3>Node.js Certification</h3>
            <p>Proficient in server-side JavaScript development using Node.js and Express.</p>
          </Card>
          <Card pdfUrl="/certifications/cert3.pdf">
            <h3>TypeScript Certification</h3>
            <p>Advanced knowledge in TypeScript for type-safe JavaScript development.</p>
          </Card>
          <Card pdfUrl="/certifications/cert4.pdf">
            <h3>JavaScript Certification</h3>
            <p>Expertise in JavaScript fundamentals and advanced concepts.</p>
          </Card>
          <Card pdfUrl="/certifications/cert5.pdf">
            <h3>Next.js Certification</h3>
            <p>Specialized in Next.js framework for server-side rendering and static site generation.</p>
          </Card>
          <Card pdfUrl="/certifications/cert6.pdf">
            <h3>Tailwind CSS Certification</h3>
            <p>Proficient in Tailwind CSS for rapid UI development.</p>
          </Card>
          <Card pdfUrl="/certifications/cert7.pdf">
            <h3>Git Certification</h3>
            <p>Version control mastery with Git and GitHub workflows.</p>
          </Card>
          <Card pdfUrl="/certifications/cert8.pdf">
            <h3>Database Design Certification</h3>
            <p>Skills in database design and management with SQL and NoSQL databases.</p>
          </Card>
          <Card pdfUrl="/certifications/cert9.pdf">
            <h3>API Development Certification</h3>
            <p>Experience in building RESTful APIs and GraphQL services.</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  )
}

export default CertificationsSection