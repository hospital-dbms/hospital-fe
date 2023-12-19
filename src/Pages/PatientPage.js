import React from 'react';
import '../css/doctorPage.css';

function PatientPage() {
    return (
        <>
            <div className="left-panel">
                <nav>
                    <div>
                        <header>
                            <br /><br />
                            <h3>Patient</h3>
                            <h2>John</h2>
                        </header>
                        <ul>
                            <li>
                                <a href="/doctor-dashboard">Profile</a>
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
                    <a href="/doctor-dashboard" className="navbar-brand" style={{marginLeft:'30px'}}>HOSPITAL MANAGEMENT</a>
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="navbar-nav" style={{ marginLeft: 'auto' }}>
                            <a href="/logout" className="nav-item nav-link" style={{marginRight:'30px'}}>Logout</a>
                        </div>
                    </div>
                </nav>
                <div className="panel panel-primary">
                    
                        <h1 style={{textAlign:'center'}}>Your Appointments</h1>
                   
                    <table className="table table-hover" id="dev-table" style={{marginTop:'30px'}}>
                        <thead>
                            <tr>
                                <th>Doctor Name</th>
                                <th>Description</th>
                                <th>Appointment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DoctorName</td>
                                <td>description</td>
                                <td>appointmentDate</td>
                                <td>
                                    <button className='btn btn-danger'>Cancel</button>
                                </td>
                            </tr>
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

export default PatientPage;
