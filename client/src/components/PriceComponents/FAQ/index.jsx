import React from 'react';
import faqData from './data/faqData.json'; 
import styles from './FAQ.module.sass'

const FAQ = () => (
  <section className={styles.faqs}>
    {faqData.map((faq, index) => (
      <div key={index} className={styles.faq}>
        <h2>{faq.question}</h2>
        <p>{faq.answer}</p>
      </div>
    ))}
  </section>
);

export default FAQ;
