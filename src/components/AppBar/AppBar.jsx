import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectLanguage, toggleLanguage } from "../../redux/language/languageSlice";
import css from "./AppBar.module.css";

export default function AppBar() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageToggle = () => {
    const newLang = currentLanguage === 'uk' ? 'en' : 'uk';
    dispatch(toggleLanguage());
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <Navigation />
      </nav>
      <div className={css.rightSection}>
        <div className={css.languageSwitcher}>
          <span className={`${css.langLabel} ${currentLanguage === 'uk' ? css.active : ''}`}>UK</span>
          <label className={css.switch}>
            <input
              type="checkbox"
              checked={currentLanguage === 'en'}
              onChange={handleLanguageToggle}
            />
            <span className={css.slider}></span>
          </label>
          <span className={`${css.langLabel} ${currentLanguage === 'en' ? css.active : ''}`}>ENG</span>
        </div>
        <div className={css.authSection}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
}






