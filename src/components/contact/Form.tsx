'use client'

import { Field, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup';
import { Card } from '../card/Card';
import { FormEventHandler, useId, useState } from 'react';
import { Input } from './Input';
import Button from '../button/Button';
import { api } from '@/api';
import { toast } from 'react-hot-toast';
import { format, parseISO } from 'date-fns';

const validationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    phoneNumber: Yup.string().required('Campo requerido').max(10, 'El número debe ser de 10 dígitos').min(10, 'El número debe ser de 10 dígitos'),
    message: Yup.string()
})

const initialValues = {
    name: '',
    phoneNumber: '',
    message: ''
}

export const Form = () => {

    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (values: (typeof initialValues), helpers: FormikHelpers<typeof initialValues>) => {

        const req = api.post('/contact', values);

        setIsLoading(true);
        toast.promise(req, {
            loading: 'enviando',
            success: ({ data }) => {
                console.log({ data });
                setIsLoading(false);
                helpers.resetForm();
                return data;
            },
            error: () => {
                setIsLoading(false);
                return 'ocurrió un error, inténtalo de nuevo más tarde'
            }
        }, {
            duration: 10000
        })

    }

    const fromikProps = { initialValues, validationSchema, onSubmit }

    return (
        <Card
            id='formulario'
            noPadding
            className='flex-1 md:min-w-[420px] max-w-full xl:max-w-[550px] bg-gradient-to-br from-primary to-secondary text-white px-6 py-8 md:px-8 md:py-16'
        >
            <Formik
                {...fromikProps}
            >

                {({ handleSubmit }) => (
                    <form id='formulario' className='flex flex-col gap-3' onSubmit={handleSubmit} >
                        <h4 className=' text-secondary-light text-2xl mb-10 text-center'>Formulario de contacto</h4>
                        <div className="flex flex-col gap-4">
                            <Input
                                name='name'
                                nameDisplayed='Tu nombre'
                                placeholder='escribe tu nombre aqui'
                            />
                            <Input
                                name='phoneNumber'
                                nameDisplayed='Número de contacto'
                                type='number'
                                placeholder='ej. 6181234567'
                            />
                            <Input
                                name='message'
                                type='textarea'
                                nameDisplayed="Mensaje"
                                placeholder='menciona cualquier información adicional o relevante'
                            />
                        </div>
                        <p className='text-center text-sm'>Tu bienestar es nuestra prioridad y estamos aquí para brindarte la mejor atención médica. ¡Esperamos poder atenderte pronto!</p>
                        <Button disabled={isLoading} className='mt-5 md:mt-10 w-full md:w-fit self-end ' >
                            Enviar formulario
                        </Button>
                    </form>
                )}

            </Formik>
        </Card>
    )
}

