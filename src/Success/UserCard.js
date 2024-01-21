import React from 'react'
import './UserCard.css';

export const UserCard = ({ responseData }) => {
    return (
        <div className="table-responsive wrapper bg-dark d-flex align-items-center justify-content-center w-200">
            <div className="userCard">
                <h5 className="text-center mb-3">User Details</h5>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-light' key={responseData.id}>
                            <td scope="row">{responseData.id}</td>
                            <td scope="row">{responseData.firstname + ' ' + responseData.lastName}</td>
                            <td scope="row">{responseData.emailId}</td>
                            <td scope="row">{responseData.mobileNumber}</td>
                            <td scope="row">{responseData.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
