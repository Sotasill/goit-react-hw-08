import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading, selectError } from "../../redux/contacts/selectors";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts) || [];
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={css.contactBox}>
      {contacts.map((contact) => (
        <Contact key={contact.id} data={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
