import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.description}>
          <p className={styles.mainText}>
            {t('footer.mainText', {
              defaultValue: 'ContactKeeper — це зручний і безпечний сервіс для зберігання та управління вашими контактами. Ми допомагаємо вам легко зберігати, знаходити та оновлювати інформацію про друзів, колег та партнерів, гарантуючи захист ваших даних та конфіденційність.',
              en: 'ContactKeeper is a convenient and secure service for storing and managing your contacts. We help you easily store, find and update information about friends, colleagues and partners, ensuring the protection of your data and privacy.'
            })}
          </p>
          <p className={styles.copyright}>
            {t('footer.copyright', {
              defaultValue: '© 2024 ContactKeeper. Всі права захищені.',
              en: '© 2024 ContactKeeper. All rights reserved.'
            })}
          </p>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
