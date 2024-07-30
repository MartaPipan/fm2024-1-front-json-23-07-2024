import React, { useState } from 'react';
import faqData from './data/faqData.json';
import styles from './FAQ.module.sass';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqData.faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <section
        key={index}
        className={`${styles.faq} ${isOpen ? styles.open : ''}`}
      >
        <h3 className={styles.header} onClick={() => handleToggle(index)}>
          {faq.question}
          <button className={styles.toggleButton}>{isOpen ? 'x' : '+'}</button>
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
