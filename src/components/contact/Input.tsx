import { useId, useMemo } from "react";
import { ErrorMessage, Field, useField } from "formik";
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface InputProps {
    className?: string,
    name: string,
    type?: string,
    placeholder?: string,
    nameDisplayed: string,
    // handleChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null,
    size?: 'small' | 'medium' | 'large'
}


export const Input = ({ className = "", name, type = 'text', placeholder, nameDisplayed, size }: InputProps) => {
    const id = useId();
    const data = useField(name);
    const isActive = data[1].value !== '';
    const hasError = data[1].error && data[1].touched;
    const [errorRef] = useAutoAnimate<HTMLDivElement>();

    const FieldElement = useMemo(() => {
        switch (type) {
            case 'textarea':
                return (
                    <Field
                        id={id}
                        name={name}
                        as={type}
                        placeholder={placeholder}
                        className={`w-[100%] px-3 py-2 rounded-md text-black bg-white h-36 resize-none`}
                    />
                )

            default:
                return (
                    <Field
                        id={id}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        className={`w-[100%] px-3 py-2 rounded-md text-black bg-white`}
                    />
                )

        }
    }, [type, id, name, placeholder])

    return (
        <>
            <div className={`${className} flex flex-col w-[100%]`} >
                <label htmlFor={id} className={`mb-1`}>
                    {nameDisplayed}
                </label>
                {FieldElement}
                <div ref={errorRef} className={`text-xs mt-0.5 text-secondary-light`}>
                    <ErrorMessage name={name} component='div' />
                </div>
            </div>
        </>



    )
}