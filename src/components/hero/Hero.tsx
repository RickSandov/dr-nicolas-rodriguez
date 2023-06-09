'use client'
import React from 'react'
import Button from '../button/Button'
import { ArrowDown } from '../icons'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

export const Hero = () => {
    return (
        <motion.section
            variants={fadeIn('', 'spring', 0, 1)}
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true
            }}
            id='inicio' className='bg-no-repeat bg-cover bg-center bg-hero relative h-[97vh] md:h-[100vh] bg-primary w-full px-6 md:px-14 lg:px-20 xl:px-28 flex flex-col justify-center items-start ' >
            <div className='flex flex-col gap-3 relative top-6 md:top-10' >
                <motion.h1
                    variants={fadeIn('right', 'spring', .8, 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true
                    }}
                    className='font-bold text-secondary-light text-4xl sm:text-5xl' style={{
                        lineHeight: 1.3
                    }} >
                    TU <strong className='text-primary bg-white px-1'>SALUD,</strong><br />NUESTRA PRIORIDAD.<br /> SIEMPRE.
                </motion.h1>
                <div className='text-white max-w-[500px]'>
                    <motion.p
                        variants={fadeIn('up', 'spring', 1, 1)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{
                            once: true
                        }}
                    >
                        Atención médica especializada en <strong className='text-secondary-light'>salud femenina</strong>, con enfoque preventivo y soluciones personalizadas para cada etapa de tu vida.
                        <br />
                    </motion.p>
                    <div className='mt-8 flex flex-col items-start gap-2'>
                        <motion.p
                            variants={fadeIn('up', 'spring', 1.2, 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true
                            }}
                        > Solicite una consulta con<br />el
                            <a
                                href='#doctor'
                                className='text-secondary-light ml-1 p-1 bg-primary font-bold cursor-pointer transition-colors hover:bg-primary-light hover:text-primary' >
                                {`Dr. Nicolás Rodríguez Luna.`}
                            </a>
                        </motion.p>
                        <motion.div
                            variants={fadeIn('right', 'spring', 1.4, 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true
                            }}
                            className='mt-2 w-full flex'
                        >
                            <Button
                                className='animate-pulse text-xl uppercase font-bold w-full text-center bg-secondary-light hover:animate-none hover:translate-y-1 hover:shadow-sm hover:text-secondary py-4 hover:bg-primary-light'
                                href='#formulario'
                            >
                                Agendar cita
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <a
                href='#doctor'
                className='absolute bottom-3 left-1/2 text-white -translate-x-1/2'
            >
                <motion.div
                    variants={fadeIn('', 'spring', 2, 1)}
                    initial='hidden'
                    animate='show'
                    viewport={{
                        once: true
                    }}
                    className=' h-10 w-10' >
                    <ArrowDown className='animate-bounce' />
                </motion.div>
            </a>
        </motion.section >
    )
}
