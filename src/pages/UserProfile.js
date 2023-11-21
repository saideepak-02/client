import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

function UserProfile() {
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        if (showToast) {
            toast.success("login success");
            setShowToast(false);
        }
        return () => {
            setShowToast(true);
        }
    }, [])
    return (
        <div>
            <div className='container'>
                <nav className="navbar bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <span className="navbar-brand" >user profile</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" >Link</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='body'>
            <h2>Home </h2>
            </div>
            
            <ToastContainer position={"top-center"} />
        </div>
    )
}


export default UserProfile;