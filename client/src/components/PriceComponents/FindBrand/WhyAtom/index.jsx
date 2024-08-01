import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import whyAtomData from "./data/whyAtomData.json";
import styles from './WhyAtom.module.sass';

const WhyAtom = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(whyAtomData);
    }, []);

    const renderSubsections = (subsections) => {
        return subsections.map((sub, idx) => (
            <div key={idx}>
                <span className={styles.spanBefore}></span>
                <h4>{sub.heading}</h4>
                <p>{sub.content}</p>
            </div>
        ));
    };

    const renderButtons = (buttons) => {
        return (
            <div className={styles.buttonsRight}>
                {buttons.map((button, idx) => (
                    <Link key={idx} to={button.link}>
                        <button>{button.text}</button>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <section className={styles.containerRight}>
            {data.map((section, index) => (
                <div key={index} className={`${styles.sectionRight}}`}>
                    <h3>{section.title}</h3>
                    {section.subsections && renderSubsections(section.subsections)}
                    {section.buttons && renderButtons(section.buttons)}
                </div>
            ))}
        </section>
    );
};

export default WhyAtom;
