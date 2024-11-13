import css from "./ContactForm.module.css";
import { useId } from "react";
// import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ValidationShema from "../../validationshema"; 
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
// import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success(t('contacts.addSuccess'))
      })
      .catch(() => {
        toast.error(t('contacts.addError'))
      })

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationShema}
    >
      <Form className={css.form}>
        <div className={css.formElementWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            {t('contacts.name')}
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
            placeholder={t('contacts.enterName')}
          />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formElementWrapper}>
          <label htmlFor={numberFieldId} className={css.label}>
            {t('contacts.number')}
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
            placeholder={t('contacts.enterNumber')}
          />
          <ErrorMessage
            name="number"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <button type="submit" className={css.submitButton}>
          {t('contacts.addContact')}
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;

  // return (
  //   <Formik
  //   initialValues={initialValues}
  //   onSubmit={handleSubmit}
  //   validationSchema={FeedbackSchema}
  // >
  //   {({ errors, touched, getFieldProps }) => (
  //     <Form className={css.form}>
  //       <div className={css.field}>
  //         <TextField
  //           variant="filled"
  //           label="Name"
  //           id={nameFieldId}
  //           {...getFieldProps('name')}
  //           error={touched.name && Boolean(errors.name)}
  //           helperText={touched.name && errors.name}
  //           fullWidth
  //         />
  //       </div>

  //       <div className={css.field}>
  //         <TextField
  //           variant="filled"
  //           label="Number"
  //           id={numberFieldId}
  //           {...getFieldProps('number')}
  //           error={touched.number && Boolean(errors.number)}
  //           helperText={touched.number && errors.number}
  //           fullWidth
  //         />
  //       </div>

  //       <Button variant="contained" color="primary" type="submit" className={css.btn}>
  //         Add contact
  //       </Button>
  //     </Form>
  //   )}
  // </Formik>
  // );
