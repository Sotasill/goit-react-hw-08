import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const { t } = useTranslation();

  return (
    <div>
      <NavLink className={css.link} to="/register">
        {t('auth.register')}
      </NavLink>
      <NavLink className={css.link} to="/login">
        {t('auth.login')}
      </NavLink>
    </div>
  );
}
