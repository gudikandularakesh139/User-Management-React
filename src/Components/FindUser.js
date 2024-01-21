import React, { useState } from 'react';
import './FindUser.css';
import { UserCard } from '../Success/UserCard';
import { UserFailed } from '../Failure/UserFailed';
import axios from 'axios';

export const FindUser = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [apiError, setApiError] = useState(null);

    const handleAddUserDetails = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/v1/details/getUser/${mobileNumber}`);
            setApiResponse(response.data);
        } catch (error) {
            setApiError(error);
        }
    };

    return (
        <div>
            {apiResponse === null && apiError === null &&
                <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
                    <div className='findUser'>
                        <h2 className='text-center mb-3'>Find User</h2>
                        <form className='needs-validation'>
                            <div className='form-group was-validated mb-2'>
                                <label htmlFor='MobileNumber' className='form-label'>MobileNumber:</label>
                                <input type='text' className='form-control' pattern="[0-9]{10}" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                                <div className='invalid-feedback'>Please Enter your MobileNumber</div>
                            </div>
                            <div className='form-group mb-2'>
                                <button className='btn btn-success w-100' onClick={handleAddUserDetails}>Find User</button>
                            </div>
                        </form>
                    </div>
                </div>}
            <div>
                {apiResponse && <UserCard responseData={apiResponse} />}
                {apiError && <UserFailed responseData={apiError} />}
            </div>
        </div>
    )
}
