'use client'
import React from 'react'
import { Gallery } from '../gallery/Gallery'
import { Navigate } from '../icons'
import { GalleryProvider } from '@/contexts/gallery'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion'

export const Location = () => {
    return (
        <section
            id='ubicacion'
            className='py-10 mx-auto relative bg-gradient-to-r from-white to-secondary-light '
        >
            <div
                className='text-primary px-6 py-14 md:px-14 lg:px-16 lg:py-20 lg:pt-14 w-[1200px] max-w-[100%] mx-auto '
            >
                <aside className='w-full flex flex-wrap gap-10 justify-between' >
                    <div className=''>
                        <motion.h2
                            variants={fadeIn('right', 'spring', .2, 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true,
                                margin: '50px'
                            }}
                            className=' font-medium text-4xl uppercase mb-5 text-secondary' >
                            ubicación
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 'spring', .4, 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true,
                                margin: '50px'
                            }}
                            className='max-w-[400px] text-justify text-black'>
                            Te ofrecemos un ambiente cómodo y seguro para tu visita. Si tienes alguna pregunta sobre cómo llegar, no dudes en contactarnos. ¡Esperamos recibirte pronto!
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 'spring', .4, 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true,
                                margin: '50px'
                            }}
                        >
                            <a
                                href='https://www.google.com/maps/place/Dr.+Nicol%C3%A1s+Rodr%C3%ADguez+Luna/@24.003196,-104.660713,14z/data=!4m6!3m5!1s0x869bb7e755fe45dd:0xf0487e7b94a6e217!8m2!3d24.0031958!4d-104.6607134!16s%2Fg%2F11btlzdvjb?hl=es'
                                target="_blank"
                                className="mt-7 flex items-center transition-all fill-primary text-black bg-white rounded-xl py-2 px-3 pr-5 gap-2 w-80 max-w-[95%] shadow-sm-light hover:bg-secondary hover:text-white hover:fill-white"
                            >
                                <div className="h-8 w-8">
                                    <Navigate />
                                </div>
                                <p>Punta Mita 213, Jalisco, 34170 Durango, Dgo.</p>
                            </a>
                        </motion.div>
                    </div>
                    <GalleryProvider>
                        <Gallery />
                    </GalleryProvider>
                </aside>
                <motion.div
                    variants={fadeIn('up', 'spring', .4, 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                        margin: '50px'
                    }}
                    className="flex-1 mt-8 h-[300px] rounded-2xl p-3 bg-white shadow-dark">
                    <div className='overflow-hidden rounded-xl h-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14579.159528441262!2d-104.6607134!3d24.0031958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7e755fe45dd%3A0xf0487e7b94a6e217!2sDr.%20Nicol%C3%A1s%20Rodr%C3%ADguez%20Luna!5e0!3m2!1ses!2smx!4v1684361482644!5m2!1ses!2smx" className='w-full h-full' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
