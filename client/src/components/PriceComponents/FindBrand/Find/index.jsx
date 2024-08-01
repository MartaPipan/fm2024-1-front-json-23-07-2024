import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import findData from "./data/findData.json";
import styles from './Find.module.sass';

const Find = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(findData);
    }, []);

    const renderButtons = (buttons) => (
        <div className={styles.buttonsLeft}>
            {buttons.map((button, idx) => {
                if (button.text === "or") {
                    return <span key={idx} className={styles.separator}>{button.text}</span>;
                }
                return (
                    <Link key={idx} to={button.link}>
                        <button>
                            {button.text}
                            {button.image && <img src={button.image} alt={button.alt} />}
                        </button>
                    </Link>
                );
            })}
        </div>
    );

    const renderSections = () =>
        data.map((section, index) => (
            <div
                key={index}
                className={`${styles.sectionLeft} ${index === 0 ? styles.firstSectionLeft : styles.secondSectionLeft}`}
            >
                <h2>{section.title}</h2>
                {section.buttons && renderButtons(section.buttons)}
            </div>
        ));

    return (
        <section className={styles.containerLeft}>
            {renderSections()}
        </section>
    );
};

export default Find;
