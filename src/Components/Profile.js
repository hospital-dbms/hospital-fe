import React from 'react';
import '../css/doctorPage.css';

function DoctorPage() {
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
                    <a href="/doctor-dashboard" className="navbar-brand" style={{ marginLeft: '30px' }}>HOSPITAL MANAGEMENT</a>
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="navbar-nav" style={{ marginLeft: 'auto' }}>
                            <a href="/logout" className="nav-item nav-link" style={{ marginRight: '30px' }}>Logout</a>
                        </div>
                    </div>
                </nav>
                <div className="panel panel-primary">
                    <form>
                        <div className='mb-2'>
                            <label>Last Name</label>
                            <input  placeholder="Enter Last Name" className='form-control' style={{width:'400px'}} />
                        </div>
                        <div className='mb-2'>
                            <label>First Name</label>
                            <input  placeholder="Enter First Name" className='form-control' style={{width:'400px'}} />
                        </div>
                        <div className='mb-2'>
                            <label>Email</label>
                            <input  placeholder="Enter email" className='form-control' style={{width:'400px'}} />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default DoctorPage;
