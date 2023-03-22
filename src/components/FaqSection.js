import { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer, active, onClick }) => (
  <div className="border-2 my-4  border-gray-100 rounded-lg">
    <button
      className="flex items-center justify-between w-full p-8"
      onClick={onClick}
    >
      <h1 className="font-semibold text-left text-gray-700">{question}</h1>
      <span
        className={`rounded-full ${
          !active ? "text-white bg-blue-500" : "text-blue-500 bg-gray-200"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={!active ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M18 12H6"}
          />
        </svg>
      </span>
    </button>
    <hr className="border-gray-200" />
    {active && (
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-8 text-sm text-gray-500"
      >
        {answer}
      </motion.p>
    )}
  </div>
);

const FAQSection = () => {
  const [faqno, setFaqno] = useState(0);

  const faqs = [
    {
      question:
        "What services does Dream Ed Consultancy offer for students seeking to study abroad?",
      answer:
        "Dream Ed Consultancy offers a wide range of services for students planning to study abroad, including university selection, application assistance, visa guidance, pre-departure orientation, accommodation arrangements, and career counseling. Our experienced counselors work closely with students to help them identify the best-fit universities and guide them through the entire application process.",
    },
    {
      question:
        "How does Dream Ed Consultancy help with the university selection process?",
      answer:
        "Our expert counselors will assess your academic background, interests, career aspirations, and financial capabilities to suggest universities that match your profile. We consider factors such as program rankings, faculty expertise, research opportunities, campus facilities, and location to ensure you find the right university for your studies.",
    },
    {
      question:
        "What are the key factors to consider when choosing a study abroad destination?",
      answer:
        "Students should consider several factors when choosing a study abroad destination, including the quality of education, cost of living and tuition fees, availability of scholarships and financial aid, language requirements, work opportunities, and cultural experiences. Dream Ed Consultancy's counselors can help you evaluate these factors and guide you in making an informed decision.",
    },
    {
      question: "Can Dream Ed Consultancy help with obtaining a student visa?",
      answer:
        "Yes, Dream Ed Consultancy provides comprehensive guidance on the student visa process. Our team will help you understand the visa requirements, prepare the necessary documents, and guide you through the application process. We also conduct mock visa interviews to help you prepare for the actual interview with the consulate or embassy.",
    },
    {
      question:
        "What kind of support does Dream Ed Consultancy offer to students after they arrive in their study abroad destination?",
      answer:
        "Dream Ed Consultancy is committed to supporting students throughout their study abroad journey. We offer assistance with accommodation arrangements, airport pick-up, and provide guidance on settling into your new environment. Additionally, we offer ongoing support and advice to help you navigate any challenges you may face while studying abroad.",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          active={faqno === index + 1}
          onClick={() => setFaqno(faqno === index + 1 ? null : index + 1)}
        />
      ))}
    </div>
  );
};

export default FAQSection;
