import React, { useState } from 'react';
import faqData from './data/faqData.json';
import styles from './FAQ.module.sass';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Função para alternar o índice do FAQ aberto
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Renderiza cada FAQ
  const faqs = faqData.faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <section
        key={index}
        className={`${styles.faq} ${isOpen ? styles.open : ''}`}
      >
        <h3>
          {faq.question}
          <button
            onClick={() => handleToggle(index)}
            className={styles.toggleButton}
          >
            {isOpen ? 'x' : '+'}
          </button>
        </h3>
        {isOpen && <p>{faq.answer}</p>}
      </section>
    );
  });

  return (
    <section className={styles.faqs}>
      <h2>{faqData.titleFaq}</h2>
      {faqs}
    </section>
  );
};

export default FAQ;
