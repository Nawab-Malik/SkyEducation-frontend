import React, { useState } from "react";
import plusicon from "../Assests/plusicon.svg";
import crossicon from "../Assests/crossicon.svg";

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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-100"  id="faq">
        {/* Heading */}
        <h2
          className="text-center mb-5 fw-bolder"
          style={{ fontFamily: "playfair-display-custom" }}
        >
          Frequently Asked Questions
        </h2>
      <div style={{ backgroundColor: "rgba(217, 243, 253, 1)" , width: "100%"}} className="m-0 py-5">

        {/* FAQ Items */}
        <div className="mx-auto px-4" style={{ maxWidth: "800px" }}>
          {faqData.map((item, index) => (
            <div key={index} className="py-3" style={{ borderTop: "2px solid white" }}>
              {/* Question Row */}
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
              >
                <h6 className="mb-0 fw-bold">{item.question}</h6>
                <img
                  src={openIndex === index ? crossicon : plusicon}
                  alt="icon"
                  width="18"
                  height="18"
                />
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-2 pt-2 mb-0 small" style={{ borderTop: "2px solid white" }}>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
          {/* bottom white line */}
          <div className="mt-3" style={{ borderTop: "2px solid white" }}></div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
