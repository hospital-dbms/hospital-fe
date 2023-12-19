import React, { useState, useEffect } from 'react';
import '../css/doctorPage.css';
import axios from 'axios';

function DoctorPage() {
    const [AppointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/exam/appointments/', {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response)
        const jsonData = await response.data;
        setAppointmentData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateStatusApprove = async(appointment) => {
    const updateData=  await axios.put('http://127.0.0.1:8000/exam/appointments/1/',
        {
            ...appointment,
            "status": "approved"
        }
    , {
        headers: {
            "Content-Type": "application/json"
        }
    })
    window.location.reload()

  };
  const handleUpdateStatusReject = async(appointment) => {
    const updateData=  await axios.put('http://127.0.0.1:8000/exam/appointments/1/',
        {
            ...appointment,
            "status": "rejected"
        }
    , {
        headers: {
            "Content-Type": "application/json"
        }
    })
    window.location.reload()
  };

    return (
        <>
            <div className="left-panel">
                <nav>
                    <div>
                        <header>
                            <br /><br />
                            <h3>Doctor</h3>
                            <h2>John</h2>
                        </header>
                        <ul>
                            <li>
                                <a href="/doctor-dashboard">Profile</a>
                            </li>
                            <li>
                                <a href="/doctor-patient">Patient</a>
                            </li>
                            <li>
                                <a href="/doctor-appointment">Appointments</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='right-panel'>
                <nav className="navbar navbar-expand-md navbar-dark" style={{ background: '#337AB7' }}>
                    <a href="/ABC-hospital" className="navbar-brand" style={{ marginLeft: '30px' }}>ABC Hospital</a>
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="navbar-nav" style={{ marginLeft: 'auto' }}>
                            <a href="/logout" className="nav-item nav-link" style={{ marginRight: '30px' }}>Logout</a>
                        </div>
                    </div>
                </nav>
                <div className="panel panel-primary">

                    <h1 style={{ textAlign: 'center' }}>Your Appointments</h1>

                    <table className="table table-hover" id="dev-table" style={{ marginTop: '30px' }}>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                {/* <th>Description</th> */}
                                <th>PhoneNumber</th>
                                <th>Gender</th>
                                <th>Appointment Date</th>
                                <th>Status</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {AppointmentData.map(appointment => (
                                <tr key={appointment.id}>
                                    <td>{appointment.userName}</td>
                                    <td>{appointment.phoneNumber}</td>
                                    <td>{appointment.gender}</td>
                                    <td>{new Date(appointment.date).toLocaleString()}</td>
                                    <td>{appointment.status}</td>
                                    <td>
                                        <button onClick={() => handleUpdateStatusApprove(appointment)} className="btn btn-success" style={{marginRight:'10px'}}> Approve</button>
                                        <button onClick={() => handleUpdateStatusReject(appointment)} className="btn btn-danger"> Reject</button>
                                    </td>
                                </tr>
                            ))}
                            
                            {/* {appointments.map(({ appointment, patient }) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.patientName}</td>
                                    <td>
                                        <img src={patient.profile_pic.url} alt="Profile Pic" height="40px" width="40px" />
                                    </td>
                                    <td>{appointment.description}</td>
                                    <td>{patient.mobile}</td>
                                    <td>{patient.address}</td>
                                    <td>{appointment.appointmentDate}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default DoctorPage;
