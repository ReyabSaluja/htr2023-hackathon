import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Navbar() {
    let { user, logoutUser } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <div className="nav-links-right">
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
                <Link to="/about-us" className="nav-link">
                    About Us
                </Link>

                {user ? (
					<>
						<Link to="/classrooms" className="nav-link">
							Classrooms
						</Link>
                        <a className="nav-link" onClick={logoutUser}>Logout</a>
					</>
                ) : (
                    <>
                        <Link to="/sign-up" className="nav-link">Sign Up</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
