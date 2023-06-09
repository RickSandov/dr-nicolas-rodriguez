'use client'

import React from 'react'
import { DoctorIcon } from '../icons'
import Button from '../button/Button'
import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '@/utils/motion';

export const DrSection = () => {
    return (
        <section

            id='doctor'
            className='px-6 py-14 md:py-24 md:pb-32 md:px-14 lg:px-16 bg-gradient-to-br from-white to-secondary-light flex flex-col items-center'
        >
            <article className='max-w-full w-[800px] flex flex-wrap items-center justify-between' >
                <div>
                    <motion.span
                        variants={fadeIn('right', 'spring', 0, 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{
                            once: true,
                            margin: '-100px'
                        }}
                        className='text-black block'
                    >conoce al</motion.span>
                    <motion.h2
                        variants={fadeIn('up', 'spring', .2, 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{
                            once: true,
                        }}
                        className='mt-1 mb-3  w-fit py-1 px-2 -ml-2 font-bold bg-secondary-light text-primary text-3xl sm:text-4xl' style={{
                            lineHeight: 1.3
                        }}
                    >Dr. Nicolás Rodriguez Luna</motion.h2>
                    <motion.ol
                        variants={fadeIn('right', 'spring', .4, 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{
                            once: true,
                        }}
                        className='text-secondary text-sm -ml-1' >
                        <li>
                            <p>Especialidad: <strong>4010408</strong></p>
                        </li>
                        <li>
                            <p>Certificación: <strong>c-0260/04</strong></p>
                        </li>
                    </motion.ol>
                    <hr className='-ml-2 my-6 md:w-[450px] max-w-full border-secondary-light' />
                    <motion.p
                        variants={fadeIn('up', 'spring', .6, 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{
                            once: true,
                        }}
                        className='text-black md:w-[450px] max-w-full text-justify' >
                        <strong>Médico Gineco-obstetra y Colposcopista</strong>, egresado de la Universidad Juárez del Estado de Durango, quien cuenta con cerca de <strong className='bg-secondary-light inline-block px-1' >20 años de experiencia</strong> en el cuidado y manejo de la <strong className='bg-secondary-light inline-block px-1' >salud de la mujer;</strong> en el embarazo y en <strong>todas las etapas</strong> de la vida, desde la adolescencia hasta la madurez plena.
                    </motion.p>
                </div>
                <motion.aside
                    variants={zoomIn(.8, .5)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                    }}
                    className='w-[200px] hidden md:block' >
                    <DoctorIcon />
                </motion.aside>
            </article>
            <ul className='max-w-full w-[800px] mt-12 md:mt-16 flex flex-wrap gap-6 text-secondary' >
                <motion.li
                    variants={fadeIn('up', 'spring', .8, 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                        margin: '50px'
                    }}
                    className='flex gap-3 items-center' >
                    <span className='block h-12 w-4 bg-primary' />
                    <p className='w-full sm:w-56 lg:w-72 max-w-full' >
                        <strong>Miembro</strong> del Colegio Mexicano de <strong>Ginecólogos</strong> dedicados a la  <strong>Colposcopía</strong> Diagnóstico Terapéuta.
                    </p>
                </motion.li>
                <motion.li
                    variants={fadeIn('up', 'spring', 1, 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                        margin: '50px'
                    }}
                    className='flex gap-3 items-center' >
                    <span className='block h-12 w-4 bg-primary' />
                    <p className='w-full sm:w-56 lg:w-72 max-w-full' >
                        <strong>Diplomado</strong> en Patología del <strong>Tracto Genital Inferior</strong> y <strong>Colposcopía</strong> Diagnóstico Terapéuta.
                    </p>
                </motion.li>
            </ul>
            <motion.div
                variants={zoomIn(.8, .5)}
                initial='hidden'
                whileInView='show'
                viewport={{
                    once: true,
                }}
                className='mt-14 max-w-full w-[800px] flex'
            >
                <Button
                    className='animate-pulse text-xl uppercase font-bold text-center bg-primary text-secondary-light hover:animate-none hover:translate-y-1 hover:shadow-sm hover:text-primary py-4 hover:bg-primary-light w-full'
                    href='#formulario'
                >
                    Agendar cita
                </Button>
            </motion.div>
        </section>
    )
}
