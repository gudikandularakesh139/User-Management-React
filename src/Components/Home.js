import React from 'react';
import { Footer } from './Footer';
import { CourselComponent } from './CourselComponent';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home-main'>
            <CourselComponent />
            <main className="main-content">
                <div className="admissions-section" style={{justifyContent:'center', alignItems:'center'}}>
                    <h2>Add Users</h2>
                    <p>Now you can add users in just one click...</p>
                    <button className='btn btn-success' onClick={() => navigate('/add')}>Add Now</button>
                </div>
                <hr />
                <section id="about" className="about-section">
                    <h2>About Us</h2>
                    <p>Welcome to User Management... We provide the quick access to your data</p>
                </section>
            </main>

            {/*footer*/}

            <Footer />
        </div>
    )
}
