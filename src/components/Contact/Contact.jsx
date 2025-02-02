import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
