import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Button, TextField, Checkbox, FormControlLabel, Modal, Box } from "@mui/material";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isAgreed, setIsAgreed] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  const handleAgreementChange = (event) => {
    setIsAgreed(event.target.checked);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh',
    overflow: 'auto'
  };

  return (
    <>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAgreed}
                  onChange={handleAgreementChange}
                  color="primary"
                />
              }
              label={
                <span onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal();
                }} style={{ cursor: 'pointer' }}>
                  {t('auth.agreement')}
                </span>
              }
            />
            <Button 
              variant="contained" 
              type="submit" 
              className={css.button}
              disabled={!isAgreed}
            >
              {t('auth.registerButton')}
            </Button>
          </Form>
        )}
      </Formik>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="license-agreement-modal"
      >
        <Box sx={modalStyle}>
          <h2>{t('auth.agreementTitle')}</h2>
          <div>
            {t('auth.agreementText')}
          </div>
          <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
            {t('Close')}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
