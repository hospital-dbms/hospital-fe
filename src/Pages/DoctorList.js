import React, { useState, useEffect } from 'react';
import '../css/doctorPage.css';
import axios from 'axios';

function DoctorListPage() {
    const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/user/doctor/`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response)
        const jsonData = await response.data;
        setDoctorList(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark" style={{ background: '#337AB7' }}>
                <a href="/" className="navbar-brand" style={{ marginLeft: '30px' }}>ABC Hospital</a>
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="navbar-nav" style={{ marginLeft: 'auto' }}>
                        <a href="/" className="nav-item nav-link" style={{ marginRight: '30px' }}>Logout</a>
                    </div>
                </div>
            </nav>
            <div className="panel panel-primary">

                <h1 style={{ textAlign: 'center' }}>Doctor List</h1>

                <table className="table table-hover" id="dev-table" style={{ marginTop: '30px' }}>
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorList.map(doctor => (
                            <tr key={doctor.id}>
                                <td>

                                    <a href={'/doctor-page/' + doctor.id} target='_blank'>
                                            {doctor.name}

                                    </a>
                                </td>
            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </>
    );
}

export default DoctorListPage;
