import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async(e) => {

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 2) {
      errors.patientName = "Patient name must be at least 2 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 9) {
      errors.patientNumber = "Patient phone number must be of 9 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // Gọi API để tạo lịch hẹn
      const response = await axios.post("http://127.0.0.1:8000/exam/appointments/", {
        date: appointmentTime,
        phoneNumber: patientNumber,
        doctor: preferredMode, 
        userName: patientName,
        gender: patientGender,
        status: "pending",
        id: Date.now()
      });

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
    } catch (error) {
      console.error("Error creating appointment:", error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div className="appointment-form-section" style={{ alignContent: 'center' }}>
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container" style={{ alignItems: 'center' }} >
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <div className="form-content" >
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">Other</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          <label>
            Doctor:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value={1}>Doctor 1</option>
              <option value={2}>Doctor 2</option>
              <option value={3}>Doctor 3</option>
            </select>
          </label>

          <br />
          <button type="submit" onClick={() => handleSubmit()} className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Appointment details has been sent to the patients phone number via SMS.</p>
        </div>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
