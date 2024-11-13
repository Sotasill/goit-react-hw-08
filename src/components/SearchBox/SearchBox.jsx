import css from "./SearchBox.module.css";
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}>
        {t('contacts.search')}
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        placeholder={t('contacts.search')}
        className={css.input}
      />
    </div>
  );
}

export default SearchBox;
