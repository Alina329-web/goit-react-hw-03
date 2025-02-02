import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onAddContact(values.name, values.number);
        actions.resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field className={styles.input} name="name" type="text" />
        <ErrorMessage className={styles.error} name="name" component="div" />

        <label>Number</label>
        <Field className={styles.input} name="number" type="text" />
        <ErrorMessage name="number" component="div" />

        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
