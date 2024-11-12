import { useTranslation } from 'react-i18next';
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./HomePage.module.css";
import { useState } from 'react';

export default function HomePage() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <PageTitle>
        <span className={styles.fadeIn} style={{animationDelay: '0s'}}>c</span>
        <span className={styles.fadeIn} style={{color: "#0066ff", animationDelay: '0.1s'}}>o</span>
        {'ntactkeeper'.split('').map((letter, index) => (
          <span 
            key={index} 
            className={styles.fadeIn} 
            style={{animationDelay: `${0.2 + index * 0.05}s`}}
          >
            {letter}
          </span>
        ))}
        {' '}
        {t("home.welcome").split(/([\s])/g).map((word, wordIndex) => (
          word === ' ' ? ' ' : 
          word.split('').map((letter, letterIndex) => (
            <span 
              key={`${wordIndex}-${letterIndex}`} 
              className={styles.fadeIn} 
              style={{animationDelay: `${1.0 + (wordIndex * 5 + letterIndex) * 0.05}s`}}
            >
              {letter}
            </span>
          ))
        ))}
        {' '}
        <span 
          className={styles.fadeIn} 
          style={{animationDelay: '2.5s'}} 
          role="img" 
          aria-label="Greeting icon"
        >
          👋
        </span>
      </PageTitle>

     <div className={styles.content}>
      <div className={styles.features}>
        <h2>{t("home.features")}</h2>
        <div className={styles.accordion}>
          <div className={`${styles.accordionItem} ${activeIndex === 0 ? styles.active : ''}`}>
            <button 
              className={styles.accordionButton}
              onClick={() => toggleAccordion(0)}
            >
              <span role="img" aria-label="add">➕</span>{" "}
              {t("home.createContacts")}
            </button>
            <div className={styles.accordionContent}>
              <p>{t("home.createContactsDesc")}</p>
            </div>
          </div>

          <div className={`${styles.accordionItem} ${activeIndex === 1 ? styles.active : ''}`}>
            <button 
              className={styles.accordionButton}
              onClick={() => toggleAccordion(1)}
            >
              <span role="img" aria-label="view">👀</span>{" "}
              {t("home.viewContacts")}
            </button>
            <div className={styles.accordionContent}>
              <p>{t("home.viewContactsDesc")}</p>
            </div>
          </div>

          <div className={`${styles.accordionItem} ${activeIndex === 2 ? styles.active : ''}`}>
            <button 
              className={styles.accordionButton}
              onClick={() => toggleAccordion(2)}
            >
              <span role="img" aria-label="edit">✏️</span>{" "}
              {t("home.editContacts")}
            </button>
            <div className={styles.accordionContent}>
              <p>{t("home.editContactsDesc")}</p>
            </div>
          </div>

          <div className={`${styles.accordionItem} ${activeIndex === 3 ? styles.active : ''}`}>
            <button 
              className={styles.accordionButton}
              onClick={() => toggleAccordion(3)}
            >
              <span role="img" aria-label="delete">🗑️</span>{" "}
              {t("home.deleteContacts")}
            </button>
            <div className={styles.accordionContent}>
              <p>{t("home.deleteContactsDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    

        <div className={styles.welcome}>
          <p>{t("home.organize")}</p>
          <div className={styles.cta}>
            <p>{t("home.startNow")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
