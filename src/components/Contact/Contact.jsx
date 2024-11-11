import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import toast from "react-hot-toast";
import DelModal from "../DelModal/DelModal";
import EditModal from "../EditModal/EditModal";

export default function Contact({ data: { id, name, number } }) {
  const [modalState, setModalState] = useState({
    deleteOpen: false,
    editOpen: false,
    editName: name,
    editNumber: number
  });
  const dispatch = useDispatch();

  const handleModalToggle = (modalType, value) => {
    setModalState(prev => ({...prev, [modalType]: value}));
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success("Successfully deleted!");
      handleModalToggle('deleteOpen', false);
    } catch  {
      toast.error("Failed to delete contact");
    }
  };

  const handleUpdate = async () => {
    try {
      await dispatch(
        updateContact({
          id,
          name: modalState.editName,
          number: modalState.editNumber,
        })
      ).unwrap();
      toast.success("Successfully updated!");
      handleModalToggle('editOpen', false);
    } catch {
      toast.error("Failed to update contact");
    }
  };

  const handleEditChange = (field, value) => {
    setModalState(prev => ({...prev, [field]: value}));
  };

  return (
    <div className={css.div}>
      <p className={css.p}>
        {name}
      </p>
      <p className={css.p}>
        {number}
      </p>
      <button 
        className={css.btn} 
        onClick={() => handleModalToggle('deleteOpen', true)}
        aria-label="Delete contact"
      >
        Delete
      </button>
      <button
        className={css.editBtn}
        onClick={() => handleModalToggle('editOpen', true)}
        aria-label="Edit contact"
      >
        Edit
      </button>
      <DelModal
        open={modalState.deleteOpen}
        handleClose={() => handleModalToggle('deleteOpen', false)}
        handleDelete={handleDelete}
      />
      <EditModal
        open={modalState.editOpen}
        handleClose={() => handleModalToggle('editOpen', false)}
        handleUpdate={handleUpdate}
        editName={modalState.editName}
        setEditName={(value) => handleEditChange('editName', value)}
        editNumber={modalState.editNumber}
        setEditNumber={(value) => handleEditChange('editNumber', value)}
      />
    </div>
  );
}
