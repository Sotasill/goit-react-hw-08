import css from './AboutPage.module.css';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className={css.container}>
      <h1 className={css.title}>{t('about.title')}</h1>
      <p className={css.description}>
        {t('about.description')}
      </p>
      <h2 className={css.subtitle}>{t('about.features')}</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span role="img" aria-label="add">➕</span>{" "}
          <strong>{t('about.createContacts')}:</strong> {t('about.createContactsDesc')}
        </li>
        <li className={css.listItem}>
          <span role="img" aria-label="view">👀</span>{" "}
          <strong>{t('about.viewContacts')}:</strong> {t('about.viewContactsDesc')}
        </li>
        <li className={css.listItem}>
          <span role="img" aria-label="edit">✏️</span>{" "}
          <strong>{t('about.editContacts')}:</strong> {t('about.editContactsDesc')}
        </li>
        <li className={css.listItem}>
          <span role="img" aria-label="delete">🗑️</span>{" "}
          <strong>{t('about.deleteContacts')}:</strong> {t('about.deleteContactsDesc')}
        </li>
        <li className={css.listItem}>
          <span role="img" aria-label="search">🔍</span>{" "}
          <strong>{t('about.search')}:</strong> {t('about.searchDesc')}
        </li>
      </ul>
      
    </div>
  );
};

export default AboutPage;
