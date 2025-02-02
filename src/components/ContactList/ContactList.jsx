import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number} {onDeleteContact}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
