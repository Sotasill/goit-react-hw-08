import { useTranslation } from 'react-i18next';
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { t } = useTranslation();

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
          <ul>
            <li>
              <span role="img" aria-label="add">
                ➕
              </span>{" "}
              {t("home.createContacts")}
            </li>
            <li>
              <span role="img" aria-label="view">
                👀
              </span>{" "}
              {t("home.viewContacts")}
            </li>
            <li>
              <span role="img" aria-label="edit">
                ✏️
              </span>{" "}
              {t("home.editContacts")}
            </li>
            <li>
              <span role="img" aria-label="delete">
                🗑️
              </span>{" "}
              {t("home.deleteContacts")}
            </li>
          </ul>
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
