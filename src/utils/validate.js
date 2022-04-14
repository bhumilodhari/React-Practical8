import * as Yup from 'yup'
import "yup-phone"

const phoneRegExp = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/

export const validationSchema =

    Yup.object({

        file: Yup.mixed()
            .required("Required")
            .test(
                "fileSize",
                "Image should be less than 2Mb",
                (value) => {
                    return !value || value.size <= 200000
                }
            ).test("fileType", "File type not allow", (value) => {
                return (
                    !value ||
                    (value !== null && ["image/jpg", "image/png", "image/jpeg"].includes(value.type))
                );
            }),
        name: Yup.string()
            .required("Required")
            .max(15, "Name is to large"),

        email: Yup.string()
            .required("Required")
            .email("Email is invalid"),

        phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "To short")
            .max(10, "To long"),

        password: Yup.string()
            .required("Required")
            .min(8, "Password is short"),

        confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password should be match"),

    })