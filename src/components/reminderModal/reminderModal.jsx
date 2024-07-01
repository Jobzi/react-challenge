import React, { useState } from "react";
import "./styles.css";

const DEFAULT_FORM_STATE = {
  text: "",
  city: "",
  date: "",
  time: ""
};

const ReminderModal = ({ isOpen, setIsOpen, date }) => {
  const [form, setForm] = useState({
    ...DEFAULT_FORM_STATE,
    date
  });

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    setForm(DEFAULT_FORM_STATE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSave = () => {
    handleClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Reminder</h2>
        </div>
        <div className="modal-body">
          <label htmlFor="text-input">Text (max 30 characters):</label>
          <input
            type="text"
            id="text-input"
            name="text"
            value={form.text}
            maxLength="30"
            onChange={handleChange}
          />
          <label htmlFor="city-input">City:</label>
          <input
            type="text"
            id="city-input"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
          <label htmlFor="date-input"> Date:</label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}
          />
          <label htmlFor="date-input"> Time:</label>
          <input
            type="time"
            value={form.time}
            name="time"
            onChange={handleChange}
          />
        </div>
        <div className="modal-footer">
          <button className="cancel" onClick={handleClose}>
            Cancel
          </button>
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

ReminderModal.defaultProps = {
  isOpen: false,
  date: "",
  setIsOpen: () => {}
};

export default ReminderModal;
