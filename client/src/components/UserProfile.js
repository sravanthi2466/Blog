import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
    return (
        <div className="user-profile-container m-5">
            <div className="userprof m-5">
                <ul className="nav justify-content-center fs-4">
                    <li className="nav-item">
                        <NavLink to="articles" className="nav-link text-warning" activeClassName="active">Articles</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default UserProfile;
