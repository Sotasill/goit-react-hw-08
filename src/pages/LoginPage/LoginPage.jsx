import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from './LoginPage.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LoginPage() {
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
    <div className={css.container}>
      <div className={css.glassEffect}>
        <PageTitle>{t('auth.login')}</PageTitle>
        <LoginForm />
      </div>
    </div>
  );
}
