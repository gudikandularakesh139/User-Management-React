import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const List = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/details/getAllUsers');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='table-responsive'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr className='bg-light' key={item.id}>
                                <td scope="row">{item.id}</td>
                                <td scope="row">{item.firstName+' '+item.lastName}</td>
                                <td scope="row">{item.emailId}</td>
                                <td scope="row">{item.mobileNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
