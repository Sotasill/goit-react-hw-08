import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        {t('navigation.home')}
      </NavLink>
      <NavLink className={css.link} to="/about">
        {t('navigation.about')}
      </NavLink>
      
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          {t('navigation.contacts')}
        </NavLink>
      )}
    </nav>
  );
}
