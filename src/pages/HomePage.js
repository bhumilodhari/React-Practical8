import React from 'react'
import "../assets/css/homePage.css";
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../store/userSlice';

const HomePage = () => {
    const profile = useSelector(state => state.user);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(userAction.logout());
    }

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding mt-4">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body text-center">
                                <div>
                                    <img src={profile.file} className="img rounded-circle mt-4 auto" style={{ height: "10rem", width: "10rem" }} alt="profile" />
                                    <h4 className="mt-4">Hello!  {profile.name}</h4>
                                    <p className="text-muted mb-0">You are registerd with the email id : {profile.email}</p>
                                    <p>Phone number : {profile.phone}</p>
                                </div>
                                <button className="btn btn-info btn-sm mt-3 mb-4" onClick={logoutHandler}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage