import SignupContainer from "../containers/SignupContainer";
import girlIllustration from '../assets/images/girl.png';
import React from 'react'

function SignUp() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-5'>
                    <SignupContainer />
                </div>
                <div className='col-md-7'>
                    <img className='img-fluid w-100 girlImage' src={girlIllustration} alt='' />
                </div>
            </div>
        </div>
    )
}

export default SignUp