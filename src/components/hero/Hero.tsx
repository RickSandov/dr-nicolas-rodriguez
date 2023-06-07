import React from 'react'
import Button from '../button/Button'

export const Hero = () => {
    return (
        <section id='inicio' className='bg-no-repeat bg-cover bg-center bg-hero relative h-[105vh] md:h-[100vh] bg-primary w-full px-6 md:px-14 lg:px-20 xl:px-28 flex flex-col justify-center items-start gap-3' >
            <h1 className='font-bold text-secondary-light text-4xl sm:text-5xl' style={{
                lineHeight: 1.3
            }} >
                TU <strong className='text-primary bg-white px-1'>SALUD,</strong><br />NUESTRA PRIORIDAD.<br /> SIEMPRE.
            </h1>
            <div className='text-white max-w-[500px]'>
                <p>
                    Atención médica especializada en <strong className='text-secondary-light'>salud femenina</strong>, con enfoque preventivo y soluciones personalizadas para cada etapa de tu vida.
                    <br />
                </p>
                <div className='mt-8 flex flex-col items-start gap-2'>
                    <p> Solicite una consulta con<br />el
                        <strong
                            className='text-secondary-light ml-1 p-1 bg-primary' >
                            {`Dr. Nicolás Rodríguez Luna.`}
                        </strong>
                    </p>
                    <Button
                        className='animate-pulse mt-2 text-xl uppercase font-bold w-full text-center bg-secondary-light hover:animate-none hover:translate-y-1 hover:shadow-sm hover:text-secondary py-4 hover:bg-primary-light'
                        href='#contacto'
                    >
                        Agendar cita
                    </Button>
                </div>
            </div>


        </section >
    )
}
