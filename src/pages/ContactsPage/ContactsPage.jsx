import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <PageTitle>{t('contacts.title')}</PageTitle>
      <div className={css.content}>
        <ContactForm />
        <div className={css.loading}>
          {isLoading && t('contacts.loading')}
        </div>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
