import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useTranslation } from 'react-i18next';

const EditDialog = ({
  open,
  handleClose,
  handleUpdate,
  editName,
  setEditName,
  editNumber,
  setEditNumber,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-dialog-title"
      aria-describedby="edit-dialog-description"
    >
      <DialogTitle id="edit-dialog-title">{t('edit.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('edit.description')}</DialogContentText>
        <TextField
          variant="filled"
          label={t('edit.nameLabel')}
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="filled"
          label={t('edit.phoneLabel')}
          value={editNumber}
          onChange={(e) => setEditNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {t('edit.cancel')}
        </Button>
        <Button onClick={handleUpdate} color="primary" autoFocus>
          {t('edit.update')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
