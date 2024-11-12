import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading, selectError } from "../../redux/contacts/selectors";
import { useState } from "react";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts) || [];
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [sortOrder, setSortOrder] = useState('asc');

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  const sortedContacts = [...contacts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <button 
        className={css.sortButton} 
        onClick={handleSort}
      >
        {sortOrder === 'asc' ? 'По алфавиту (А-Я)' : 'По алфавиту (Я-А)'}
      </button>
      <ul className={css.contactBox}>
        {sortedContacts.map((contact) => (
          <Contact key={contact.id} data={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
