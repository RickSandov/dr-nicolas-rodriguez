'use client'

import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import { Card } from '../card/Card';
import { useId } from 'react';
import { Input } from './Input';
import Button from '../button/Button';

const validationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    phoneNumber: Yup.string().required('Campo requerido')
})

const initialValues = {
    name: '',
    phoneNumber: ''
}

export const Form = () => {

    const onSubmit = () => {

    }

    const fromikProps = { initialValues, validationSchema, onSubmit }

    return (
        <Card
            noPadding
            className='flex-1 md:min-w-[420px] bg-gradient-to-br from-primary to-secondary text-white px-6 py-8 md:px-8 md:py-16'
        >
            <Formik
                {...fromikProps}
            >

                {({ handleSubmit }) => (
                    <form className='flex flex-col gap-3' >
                        <h4 className='font-medium text-lg mb-10 text-center'>Formulario de contacto</h4>
                        <div className="flex flex-col gap-4">
                            <Input
                                name='name'
                                nameDisplayed='Tu nombre'
                            />
                            <Input
                                name='phoneNumber'
                                nameDisplayed='Número de contacto'
                                type='number'
                            />
                        </div>
                        <Button className='mt-32 self-end ' >
                            Enviar formulario
                        </Button>
                    </form>
                )}

            </Formik>
        </Card>
    )
}

