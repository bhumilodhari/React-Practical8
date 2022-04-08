import React from 'react'
import TextField from '../components/TextField';
import { useRef } from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validate';
import { useDispatch } from 'react-redux';
import { userAction } from '../store/userSlice';
import { useState } from 'react';

const initialValues = {
    file: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [fileName, setFileName] = useState(null);
    const inputImage = useRef();
    const dispatch = useDispatch()
    const resetHandler = () => {
        formik.setErrors({});
        formik.resetForm({});
        setFileName(null);
    }
    function onSubmit(values) {
        const reader = new FileReader()
        reader.readAsDataURL(values.file)
        reader.onloadend = () => {
            localStorage.setItem("user", JSON.stringify({ name: values.name, email: values.email, phone: values.phone, file: reader.result, isLoggedIn: true }))
        }
        dispatch(
            userAction.login({
                file: URL.createObjectURL(values.file),
                name: values.name,
                email: values.email,
                phone: values.phone,
                password: values.password,
            })
        )
        // console.log("Values", values);
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: validationSchema,
        validateOnBlur: true
    })
    // console.log(formik.errors)
    return (
        <>
            <h1 className='my-4 font-weight-bold-display-4'>Signup</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='photo-button' type='button' onClick={() => inputImage.current.click()}> Photo +</button>
                </div>
                <div>
                    <input
                        className='d-none'
                        name='file'
                        type='file'
                        ref={inputImage}
                        id="exampleFormControlInput1"
                        onChange={(event) => {
                            setFileName(event.target.files[0].name);
                            formik.setTouched({ ...formik.touched, file: true });
                            formik.setFieldValue("file", event.target.files[0]);
                        }}
                        onBlur={formik.handleBlur} />
                </div>
                {fileName && <p className=''>{fileName}</p>}
                {formik.touched.file && formik.errors.file ? (
                    <div className="img-set">{formik.errors.file}</div>
                ) : null}

                <TextField
                    name="name"
                    label="Name"
                    type="text"
                    id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.name}
                    error={formik.errors.name}
                    placeholder="Enter your name" />

                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.email}
                    error={formik.errors.email}
                    placeholder="" />

                <TextField
                    name="phone"
                    label="PhoneNo"
                    type="phone"
                    id="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.phone}
                    error={formik.errors.phone}
                    placeholder="" />

                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.password}
                    error={formik.errors.password}
                    placeholder="" />

                <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.confirmPassword}
                    error={formik.errors.confirmPassword}
                    placeholder="" />

                <div >
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-danger mx-2" onClick={resetHandler}>Reset</button>
                </div>
            </form>
        </>
    )
}

export default SignUp