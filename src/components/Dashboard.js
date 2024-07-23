import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import './Dashboard.css'

function Dashboard() 
{
  const {currentUser} = useContext(UserContext)
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome {currentUser && currentUser.name}</h3>
      <h3>Email : {currentUser && currentUser.email}</h3>
      <table id="table">
            <thead>
                <tr>
                <th>Apartment ID</th>
                <th>HOUSE NUMBER</th>
                <th>METER NUMBER</th>
                <th>CURRENT BILL</th>
                <th>HOUSE STATUS</th>
                <th>TENANT NAME</th>
                <th>TENANT EMAIL</th>
                <th>USER TYPE</th>
                </tr>
        </thead>
            {currentUser && currentUser.apartments.map(apartment => (
                
                <tbody>
                    <tr key={apartment.id}>
                      <td>{apartment.id}</td>
                      <td>{apartment.hse_no}</td>
                      <td>{apartment.meter_no}</td>   
                      <td>${apartment.current_bill}</td>
                      <td>{apartment.status}</td>
                      <td>{apartment.user.name}</td>
                      <td>{apartment.user.email}</td>
                      <td>{apartment.user.user_type}</td>
                    </tr>
            </tbody>
            
          ))}
          </table>

    </div>
  )
}

export default Dashboard