import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Button, TextField } from "@mui/material";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success(t('Success!'));
      })
      .catch(() => {
        toast.error(t('Something went wrong'));
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            <div className={css.inputContainer}>
              <FaUser size={20} />
              <Field
                component={TextField}
                type="text"
                name="name"
                variant="filled"
                label={t('Username')}
                onChange={(e) => setFieldValue("name", e.target.value)}
                className={css.input}
              />
            </div>
          </label>
          <label className={css.label}>
            <div className={css.inputContainer}>
              <FaEnvelope size={20} />
              <Field
                component={TextField}
                type="email"
                name="email"
                variant="filled"
                label={t('Email')}
                onChange={(e) => setFieldValue("email", e.target.value)}
                className={css.input}
              />
            </div>
          </label>
          <label className={css.label}>
            <div className={css.inputContainer}>
              <FaLock size={20} />
              <Field
                component={TextField}
                type="password"
                name="password"
                variant="filled"
                label={t('Password')}
                onChange={(e) => setFieldValue("password", e.target.value)}
                className={css.input}
              />
            </div>
          </label>
          <Button variant="contained" type="submit" className={css.button}>
            {t('auth.registerButton')}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
