import css from "./ContactForm.module.css";
import { useId } from "react";
// import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ValidationShema from "../../validationshema"; 
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
// import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";





const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully  added")
      })
      .catch(() => {
        toast.error("Something went wrong! Try again later")
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
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
            placeholder="Enter your name"
          />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formElementWrapper}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
            placeholder="Enter your phone number"
          />
          <ErrorMessage
            name="number"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <button type="submit" className={css.submitButton}>
          Add contact
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
