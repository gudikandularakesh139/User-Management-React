import React, { useState } from 'react'
import './AddUser.css';
import axios from 'axios';
import { UserSuccess } from '../Success/UserSuccess';
import { UserFailed } from '../Failure/UserFailed';

export const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [apiError, setApiError] = useState(null);

    const handleAddUserDetails = async (e) => {
        e.preventDefault();
        const userDetails = {
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId,
            "address": address,
            "mobileNumber": mobileNumber
        };
        try {
            const response = await axios.post('http://localhost:8080/v1/details/createUser', userDetails);
            setApiResponse(response.data);
        } catch (error) {
            setApiError(error);
        }
    };

    return (
        <div>
            {apiResponse === null && apiError === null &&
                <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
                    <div className='addUser'>
                        <h2 className='text-center mb-3'>Add User</h2>
                        <form className='needs-validation'>
                            <div className='form-group was-validated mb-2'>
                                <label htmlFor='FirstName' className='form-label'>FirstName:</label>
                                <input type='text' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <div className='invalid-feedback'>Please Enter your FirstName</div>
                            </div>
                            <div className='form-group was-validated mb-2'>
                                <label htmlFor='LastName' className='form-label'>LastName:</label>
                                <input type='text' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                <div className='invalid-feedback'>Please Enter your LastName</div>
                            </div>
                            <div className='form-group was-validated mb-2'>
                                <label htmlFor='EmailId' className='form-label'>EmailId:</label>
                                <input type='email' className='form-control' value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
                                <div className='invalid-feedback'>Please Enter your EmailId</div>
                            </div>
                            <div className='form-group was-validated mb-2'>
                                <label htmlFor='Address' className='form-label'>Address:</label>
                                <input type='text' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} required />
                                <div className='invalid-feedback'>Please Enter your Address</div>
                            </div>
                            <div className='form-group was-validated mb-2'>
                                <label htmlFor='MobileNumber' className='form-label'>MobileNumber:</label>
                                <input type='text' className='form-control' pattern="[0-9]{10}" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                                <div className='invalid-feedback'>Please Enter your MobileNumber</div>
                            </div>
                            <div className='form-group mb-2'>
                                <button className='btn btn-success w-100' onClick={handleAddUserDetails}>Add User</button>
                            </div>
                        </form>
                    </div>
                </div>}
            <div>
                {apiResponse && <UserSuccess responseData={apiResponse} />}
                {apiError && <UserFailed responseData={apiError} />}
            </div>
        </div>
    )
}
