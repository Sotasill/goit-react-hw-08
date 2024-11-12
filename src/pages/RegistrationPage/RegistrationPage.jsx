import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from './RegistrationPage.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function RegisterPage() {
  const { t } = useTranslation();

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }
    
    return () => {
      if (footer) {
        footer.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.glassEffect}>
          <PageTitle>{t('auth.register')}</PageTitle>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
