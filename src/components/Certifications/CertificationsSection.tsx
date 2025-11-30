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
          <Card pdfUrl="/certifications/ftech.pdf">
            <h3>Fetch API Certification</h3>
            <p>Mastery of JavaScript Fetch API for making HTTP requests and handling responses.</p>
          </Card>
          <Card pdfUrl="/certifications/webdev.pdf">
            <h3>Web Development Certification</h3>
            <p>Comprehensive web development skills covering frontend and backend technologies.</p>
          </Card>
          <Card pdfUrl="/certifications/programming-foundation.pdf">
            <h3>Programming Foundation Certification</h3>
            <p>Fundamental programming concepts and principles across multiple languages.</p>
          </Card>
          <Card pdfUrl="/certifications/intro-cybersec.pdf">
            <h3>Introduction to Cybersecurity</h3>
            <p>Basic concepts of cybersecurity, threats, and protection strategies.</p>
          </Card>
          <Card pdfUrl="/certifications/intro-data.pdf">
            <h3>Introduction to Data</h3>
            <p>Foundational knowledge of data management, analysis, and visualization.</p>
          </Card>
          <Card pdfUrl="/certifications/html-training.pdf">
            <h3>HTML Training Certification</h3>
            <p>Proficiency in HTML markup language and web page structure.</p>
          </Card>
          <Card pdfUrl="/certifications/ai.pdf">
            <h3>AI Certification</h3>
            <p>Understanding of artificial intelligence concepts and applications.</p>
          </Card>
          <Card pdfUrl="/certifications/intro-ai.pdf">
            <h3>Introduction to AI</h3>
            <p>Basic principles and fundamentals of artificial intelligence.</p>
          </Card>
          <Card pdfUrl="/certifications/html.pdf">
            <h3>HTML Certification</h3>
            <p>Advanced HTML skills for creating semantic and accessible web content.</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  )
}

export default CertificationsSection