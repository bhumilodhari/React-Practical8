import * as Yup from 'yup'

import { messages } from '../common/FormValidationSchema';

const phoneRegExp = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
export const validationSchema =

    Yup.object({

        file: Yup.mixed()
            .required(messages.PROFILE_PICTURE_REQUIRED)
            .test(
                "fileSize",
                messages.PROFILE_MATCH_SIZE,
                (value) => {
                    return !value || value.size <= 200000
                }
            ).test("fileType", messages.PROFILE_TYPE, (value) => {
                return (
                    !value ||
                    (value !== null && ["image/jpg", "image/png", "image/jpeg"]
                        .includes(value.type))
                );
            }),
        name: Yup.string()
            .required(messages.NAME_REQUIRED)
            .max(15, messages.NAME_LARGE),

        email: Yup.string()
            .required(messages.EMAIL_REQUIRED)
            .email(messages.EMAIL_INVALID),

        phone: Yup.string()
            .required(messages.PHONENO_REQUIRED)
            .matches(phoneRegExp, messages.PHONENO_INVALID)
            .min(10, messages.PHONENO_SHORT)
            .max(10, messages.PHONENO_LONG),

        password: Yup.string()
            .required(messages.PASSWORD_REQUIRED)
            .min(8, messages.PASSWORD_SHORT),

        confirmPassword: Yup.string()
            .required(messages.CONFIRM_PASSWORD_REQUIRED)
            .oneOf([Yup.ref("password"), null], messages.CONFIRM_PASSWORD_MATCH),

    })