import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <p>
        <FaUser className={styles.contactimg} />
        {name}
      </p>
      <p>
        <FaPhone className={styles.contactimg} />
        {number}
      </p>
      <button className={styles.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
