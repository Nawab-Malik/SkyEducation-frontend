import React, { useState } from "react";
import plusicon from "../Assests/plusicon.svg";
import crossicon from "../Assests/crossicon.svg";
import Footer from "../components/Footer";

const faqData = [
  {
    question: "What types of courses does Sky Education offer?",
    answer:
      "We offer a wide range of courses in health, beauty, public services, and education, from beginner to advanced levels.",
  },
  {
    question: "Are the courses online or in-person?",
    answer:
      "Most of our courses are available online with flexible learning options, while some practical sessions may require in-person attendance.",
  },
  {
    question: "Do I need any prior qualifications to enroll?",
    answer:
      "Entry requirements vary by course. Many beginner courses require no prior experience, while advanced levels may need relevant qualifications.",
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer:
      "Yes, all our courses provide industry-recognized certificates upon successful completion.",
  },
  {
    question: "Can I study at my own pace?",
    answer:
      "Yes! Our online courses are designed to be flexible so you can balance learning with your personal and professional commitments.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "You can easily enroll by visiting our course page, selecting your desired program, and following the step-by-step registration process.",
  },
  {
    question: "Do you offer student support during the course?",
    answer:
      "Yes, our dedicated support team and instructors are available to guide you throughout your learning journey.",
  },
];

function FAQItem({ item, index, openIndex, toggleFAQ }) {
  return (
    <div
      key={index}
      className="py-4 px-3 mb-3 rounded-4 shadow-sm bg-white"
      style={{ border: "1px solid #e5f6fb" }}
    >
      {/* Question */}
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={() => toggleFAQ(index)}
        style={{ cursor: "pointer" }}
      >
        <h6
          className="mb-0 fw-semibold"
          style={{ color: "#02AEF1", fontSize: "16px" }}
        >
          {item.question}
        </h6>
        <img
          src={openIndex === index ? crossicon : plusicon}
          alt="icon"
          width="18"
          height="18"
        />
      </div>

      {/* Answer */}
      {openIndex === index && (
        <p
          className="mt-3 mb-0 small text-muted"
          style={{ lineHeight: "1.6" }}
        >
          {item.answer}
        </p>
      )}
    </div>
  );
}

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          background: "#02AEF1",
          color: "white",
          padding: "180px 20px 80px",
        }}
      >
        <h1 className="fw-bold playfair-display-custom mb-3">
          Frequently Asked Questions
        </h1>
        <p style={{ maxWidth: "700px", fontSize: "16px", lineHeight: "1.7" }}>
          Got questions? We’ve got answers. Explore our FAQs to find everything
          you need about Sky Education’s courses, enrollment, and student
          support.
        </p>
      </section>

      {/* FAQ Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "rgba(217, 243, 253, 0.6)" }}
      >
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: "850px" }}>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Support Section */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3" style={{ color: "#02AEF1" }}>
            Still Have Questions?
          </h3>
          <p className="text-muted mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Our team is here to help you with personalized guidance. Whether
            you’re unsure which course to choose or need support during your
            learning journey, we’ve got you covered.
          </p>
          <button
            className="btn px-5 py-3 rounded-pill fw-semibold"
            style={{
              backgroundColor: "#02AEF1",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              boxShadow: "0 4px 12px rgba(2,174,241,0.4)",
            }}
          >
            Contact Support
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default FaqPage;
