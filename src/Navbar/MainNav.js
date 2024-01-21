import React from 'react';

export const MainNav = () => {

    const logo = process.env.PUBLIC_URL + '/images/USMLogo.png';

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img style={{ width: '40px' }} src={logo} alt="Company Logo" />
                    User Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/list">List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add">Add</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/find">Find the User</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
